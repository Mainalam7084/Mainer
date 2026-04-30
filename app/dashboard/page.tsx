import { StatCard } from "@/components/ui/stat-card";
import { AppShell } from "@/components/layout/app-shell";
import { CardContainer } from "@/components/ui/card-container";
import { totalCollectionValue } from "@/lib/helpers/collection";
import { getAllItems } from "@/lib/supabase/queries";

export default async function DashboardPage() {
  const items = await getAllItems();
  const totalValue = totalCollectionValue(items);
  const rareCount = items.filter((item) => item.rarity !== "Common").length;

  return (
    <AppShell
      title="Collector Dashboard"
      subtitle="A premium vault overview with real-time momentum and value snapshots."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Items" value={items.length} icon={<span>📦</span>} />
        <StatCard label="Total Value" value={Math.round(totalValue)} prefix="$" icon={<span>💰</span>} />
        <StatCard label="Rare Items" value={rareCount} icon={<span>🏆</span>} />
        <StatCard label="Recent Items" value={Math.min(items.length, 3)} suffix=" new" icon={<span>✨</span>} />
      </section>

      <CardContainer className="mt-8">
        <h2 className="text-xl font-black">Recent Items</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="rounded-lg border-[3px] border-vault-border bg-white p-3 shadow-vault">
              <p className="text-sm font-bold text-vault-primary">{item.category}</p>
              <h3 className="font-black text-vault-text">{item.name}</h3>
              <p className="text-sm text-vault-muted">{item.purchase_place}</p>
            </article>
          ))}
        </div>
      </CardContainer>
    </AppShell>
  );
}
