"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle className="mx-auto size-14 text-green-600" />
        <h3 className="mt-5 text-xl font-bold text-navy">Message sent</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for contacting Benchmark Technology. We will get back to
          you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10"
    >
      <div>
        <h3 className="text-xl font-bold text-navy">Send us a message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill in the form below and we will respond via phone, email or WhatsApp.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Your name" className="h-11 rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 rounded-xl"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" placeholder="+263..." className="h-11 rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            required
            placeholder="Product enquiry / Corporate quote"
            className="h-11 rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you need..."
          className="rounded-xl"
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="h-12 w-full gap-2 rounded-xl bg-red text-base font-bold text-white hover:bg-red-dark disabled:opacity-70"
      >
        <Send className="size-4" />
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
