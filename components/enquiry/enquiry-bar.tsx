"use client";

import { useState } from "react";
import Image from "next/image";
import { useEnquiry } from "@/lib/enquiry-store";
import { getWhatsAppUrl } from "@/lib/data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, X, Minus, Plus, MessageCircle, Trash2, FileText } from "lucide-react";

export function EnquiryBar() {
  const { items, totalItems, removeItem, updateQuantity, clearItems } =
    useEnquiry();
  const [open, setOpen] = useState(false);

  if (totalItems === 0) return null;

  const messageLines = [
    "Hello Benchmark Technology, I would like to request a quote for the following items:",
    "",
    ...items.map(
      (item, idx) =>
        `${idx + 1}. ${item.name} (${item.category}) — Qty: ${item.quantity}`
    ),
    "",
    "Please confirm availability and pricing. Thank you.",
  ];
  const whatsappUrl = getWhatsAppUrl(messageLines.join("\n"));

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-bold text-white shadow-xl shadow-navy/25 transition-all hover:scale-105 hover:bg-navy-dark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy"
        aria-label={`Open enquiry list with ${totalItems} items`}
      >
        <ShoppingCart className="size-5" />
        <span className="hidden sm:inline">Enquiry List</span>
        <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-red text-xs font-bold">
          {totalItems}
        </span>
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="h-auto max-h-[85vh] rounded-t-3xl">
          <SheetHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-white">
                  <FileText className="size-5" />
                </span>
                <div>
                  <SheetTitle>Your Enquiry List</SheetTitle>
                  <p className="text-xs text-muted-foreground">
                    {totalItems} item{totalItems !== 1 ? "s" : ""} selected
                  </p>
                </div>
              </div>
              <SheetClose
                render={
                  <Button variant="ghost" size="icon-sm" aria-label="Close" />
                }
              >
                <X className="size-5" />
              </SheetClose>
            </div>
          </SheetHeader>

          <div className="space-y-3 overflow-y-auto py-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-slate/50 p-3"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-navy">{item.name}</p>
                  <p className="text-xs capitalize text-muted-foreground">
                    {item.category}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="icon-xs"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                    className="size-7 rounded-lg"
                  >
                    <Minus className="size-3" />
                  </Button>
                  <Input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10) || 1)
                    }
                    className="h-7 w-12 rounded-lg text-center p-0"
                  />
                  <Button
                    variant="outline"
                    size="icon-xs"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                    className="size-7 rounded-lg"
                  >
                    <Plus className="size-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    className="ml-1 size-7 text-red hover:bg-red/10"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total items</span>
              <span className="font-bold text-navy">{totalItems}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={clearItems}
                className="h-12 rounded-xl"
              >
                Clear
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-bold text-white transition-colors hover:bg-[#128C7E]"
              >
                <MessageCircle className="size-4" />
                Send via WhatsApp
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
