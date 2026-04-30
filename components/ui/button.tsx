import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "rounded-lg border-2 px-4 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5";
  const styles = {
    primary:
      "border-vault-primary bg-vault-primary text-vault-text shadow-vault hover:shadow-vault-hover",
    secondary:
      "border-vault-secondary bg-vault-secondary text-vault-bg shadow-vault hover:shadow-vault-hover",
    danger: "border-vault-danger bg-vault-danger text-vault-text shadow-vault hover:shadow-vault-hover",
  };

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
