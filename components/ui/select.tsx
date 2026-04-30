import { SelectHTMLAttributes } from "react";

export function Select({ className = "", ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`w-full rounded-lg border-2 border-vault-border bg-vault-soft px-3 py-2 text-sm text-vault-text outline-none transition-all duration-200 focus:border-vault-primary focus:shadow-vault-hover ${className}`}
      {...props}
    />
  );
}
