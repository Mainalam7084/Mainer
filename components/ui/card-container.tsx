export function CardContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-vault border-[3px] border-vault-border bg-vault-card p-4 shadow-vault md:p-5 ${className}`}
    >
      {children}
    </section>
  );
}
