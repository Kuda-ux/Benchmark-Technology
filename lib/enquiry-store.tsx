"use client";

import { createContext, useContext, useSyncExternalStore, useCallback } from "react";
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

type Listener = () => void;
const listeners: Set<Listener> = new Set();

function getStoredItems(): EnquiryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function setStoredItems(items: EnquiryItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getServerSnapshot(): EnquiryItem[] {
  return [];
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getStoredItems, getServerSnapshot);

  const addItem = useCallback((product: Product) => {
    const current = getStoredItems();
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
    setStoredItems(next);
  }, []);

  const removeItem = useCallback((id: string) => {
    const next = getStoredItems().filter((i) => i.id !== id);
    setStoredItems(next);
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    const current = getStoredItems();
    if (quantity < 1) {
      setStoredItems(current.filter((i) => i.id !== id));
      return;
    }
    setStoredItems(
      current.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, []);

  const clearItems = useCallback(() => {
    setStoredItems([]);
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
