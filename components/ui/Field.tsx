import type { ComponentProps, ReactNode } from "react";

export function Label({
  children,
  htmlFor,
  className = "",
}: {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-sm font-medium text-zinc-300 ${className}`}
    >
      {children}
    </label>
  );
}

export function Input({
  className = "",
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      className={`w-full rounded-lg border border-yz-border bg-yz-elevated px-4 py-3 text-yz-text placeholder:text-zinc-600 focus:border-yz-accent focus:outline-none focus:ring-1 focus:ring-yz-accent ${className}`}
      {...props}
    />
  );
}

export function Textarea({
  className = "",
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      className={`min-h-[140px] w-full resize-y rounded-lg border border-yz-border bg-yz-elevated px-4 py-3 text-yz-text placeholder:text-zinc-600 focus:border-yz-accent focus:outline-none focus:ring-1 focus:ring-yz-accent ${className}`}
      {...props}
    />
  );
}

export function Select({
  className = "",
  children,
  ...props
}: ComponentProps<"select">) {
  return (
    <select
      className={`w-full appearance-none rounded-lg border border-yz-border bg-yz-elevated px-4 py-3 text-yz-text focus:border-yz-accent focus:outline-none focus:ring-1 focus:ring-yz-accent ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-sm text-red-400" role="alert">
      {message}
    </p>
  );
}
