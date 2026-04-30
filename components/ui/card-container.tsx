export function CardContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-vault border-2 border-vault-border bg-vault-card p-4 shadow-vault md:p-5 ${className}`}
    >
      {children}
    </section>
  );
}
