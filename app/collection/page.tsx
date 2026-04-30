import { CollectionGrid } from "@/components/cards/collection-grid";
import { AppShell } from "@/components/layout/app-shell";
import { getItems } from "@/lib/supabase/queries";

export default async function CollectionPage() {
  const items = await getItems();

  return (
    <AppShell
      title="Your Collection"
      subtitle="Collector-first gallery with fast filtering and bold vault cards."
    >
      <CollectionGrid items={items} />
    </AppShell>
  );
}
