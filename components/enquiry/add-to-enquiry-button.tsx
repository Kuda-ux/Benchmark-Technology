"use client";

import { useEnquiry } from "@/lib/enquiry-store";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export function AddToEnquiryButton({
  product,
  size = "lg",
}: {
  product: Product;
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const { addItem } = useEnquiry();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <Button
      size={size}
      onClick={handleClick}
      className={`h-12 gap-2 px-8 text-base font-semibold transition-all ${
        added
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-navy text-white hover:bg-navy-dark"
      }`}
    >
      {added ? (
        <>
          <Check className="size-5" />
          Added to Enquiry
        </>
      ) : (
        <>
          <ShoppingCart className="size-5" />
          Add to Enquiry
        </>
      )}
    </Button>
  );
}
