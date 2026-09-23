import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Benchmark Technology"
      width={200}
      height={60}
      className={`h-10 w-auto object-contain ${className}`}
      priority
    />
  );
}
