import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/collection", label: "Collection" },
  { href: "/add", label: "Add Item" },
];

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-6 md:px-8 md:py-8">
      <header className="mb-8 rounded-vault border-[3px] border-vault-border bg-vault-card p-5 shadow-vault">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vault-secondary">
              Mainer Vault
            </p>
            <h1 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h1>
            <p className="text-sm text-vault-muted">{subtitle}</p>
          </div>
          <span className="inline-flex w-fit rounded-full border-[3px] border-vault-border bg-vault-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-vault-text">
            Collector Mode
          </span>
        </div>
        <nav className="mt-5 flex flex-wrap gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border-[3px] border-vault-border bg-white px-3 py-1.5 text-sm font-semibold text-vault-text transition-all duration-200 hover:-translate-y-0.5 hover:bg-vault-primary hover:text-white hover:shadow-vault-hover"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}
