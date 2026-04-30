import { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex rounded-full border-2 border-vault-border px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}
