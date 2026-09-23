"use client";

import { createContext, useContext, useSyncExternalStore, useEffect, useCallback } from "react";
import type { Product } from "@/lib/data";

type EnquiryItem = {
  id: string;
  name: string;
  category: string;
  image: string;
  quantity: number;
};

type EnquiryContextType = {
  items: EnquiryItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearItems: () => void;
  totalItems: number;
};

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

const STORAGE_KEY = "benchmark-enquiry";

function createEnquiryStore() {
  let items: EnquiryItem[] = [];
  const listeners = new Set<() => void>();
  let loaded = false;

  function emit() {
    listeners.forEach((listener) => listener());
  }

  function loadFromStorage() {
    if (typeof window === "undefined" || loaded) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      items = saved ? JSON.parse(saved) : [];
    } catch {
      items = [];
    }
    loaded = true;
    emit();
  }

  function saveToStorage(next: EnquiryItem[]) {
    items = next;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
    }
    emit();
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function getSnapshot() {
    return items;
  }

  function getServerSnapshot() {
    return [];
  }

  return {
    loadFromStorage,
    saveToStorage,
    subscribe,
    getSnapshot,
    getServerSnapshot,
  };
}

const enquiryStore = createEnquiryStore();

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    enquiryStore.loadFromStorage();
  }, []);

  const items = useSyncExternalStore(
    enquiryStore.subscribe,
    enquiryStore.getSnapshot,
    enquiryStore.getServerSnapshot
  );

  const addItem = useCallback((product: Product) => {
    const current = enquiryStore.getSnapshot();
    const existing = current.find((i) => i.id === product.id);
    let next: EnquiryItem[];
    if (existing) {
      next = current.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      next = [
        ...current,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          image: product.image,
          quantity: 1,
        },
      ];
    }
    enquiryStore.saveToStorage(next);
  }, []);

  const removeItem = useCallback((id: string) => {
    const next = enquiryStore.getSnapshot().filter((i) => i.id !== id);
    enquiryStore.saveToStorage(next);
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    const current = enquiryStore.getSnapshot();
    if (quantity < 1) {
      enquiryStore.saveToStorage(current.filter((i) => i.id !== id));
      return;
    }
    enquiryStore.saveToStorage(
      current.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, []);

  const clearItems = useCallback(() => {
    enquiryStore.saveToStorage([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <EnquiryContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearItems, totalItems }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return context;
}
