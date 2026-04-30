import { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-lg border-2 border-vault-border bg-vault-soft px-3 py-2 text-sm text-vault-text outline-none transition-all duration-200 placeholder:text-vault-muted focus:border-vault-primary focus:shadow-vault-hover ${className}`}
      {...props}
    />
  );
}
