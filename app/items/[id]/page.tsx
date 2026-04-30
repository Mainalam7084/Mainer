import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/layout/app-shell";
import { CardContainer } from "@/components/ui/card-container";
import { categoryColor, categoryLabel, formatCurrency } from "@/lib/helpers/collection";
import { banknoteDetails, cardDetails, coinDetails } from "@/lib/mock-data";
import { getItems } from "@/lib/supabase/queries";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const items = await getItems();
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  const card = cardDetails.find((entry) => entry.item_id === item.id);
  const coin = coinDetails.find((entry) => entry.item_id === item.id);
  const banknote = banknoteDetails.find((entry) => entry.item_id === item.id);

  return (
    <AppShell title={item.name} subtitle="Detailed collectible profile with value and provenance.">
      <CardContainer className="grid gap-5 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-vault border-2 border-vault-border">
          <Image src={item.image_url} alt={item.name} fill className="object-cover" />
        </div>
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge className={categoryColor[item.category]}>{categoryLabel[item.category]}</Badge>
            <Badge className="bg-vault-soft text-vault-text">{item.rarity}</Badge>
          </div>
          <p className="text-3xl font-black text-vault-primary">{formatCurrency(item.price)}</p>
          <p className="mt-3 text-sm text-vault-muted">{item.notes}</p>

          <div className="mt-5 grid gap-2 text-sm">
            <p>
              <strong>Purchased:</strong> {item.purchase_date}
            </p>
            <p>
              <strong>Place:</strong> {item.purchase_place}
            </p>
            {card && (
              <>
                <p>
                  <strong>Player:</strong> {card.player}
                </p>
                <p>
                  <strong>Team:</strong> {card.team}
                </p>
                <p>
                  <strong>Set:</strong> {card.collection}
                </p>
                <p>
                  <strong>Serial:</strong> {card.serial_number}
                </p>
              </>
            )}
            {coin && (
              <>
                <p>
                  <strong>Country:</strong> {coin.country}
                </p>
                <p>
                  <strong>Material:</strong> {coin.material}
                </p>
                <p>
                  <strong>Year:</strong> {coin.year}
                </p>
              </>
            )}
            {banknote && (
              <>
                <p>
                  <strong>Country:</strong> {banknote.country}
                </p>
                <p>
                  <strong>Currency:</strong> {banknote.currency}
                </p>
                <p>
                  <strong>Year:</strong> {banknote.year}
                </p>
              </>
            )}
          </div>
          <div className="mt-6 flex gap-2">
            <Button>Edit Item</Button>
            <Button variant="danger">Delete</Button>
            <Link href="/collection" className="inline-flex items-center text-sm text-vault-muted">
              Back to collection
            </Link>
          </div>
        </div>
      </CardContainer>
    </AppShell>
  );
}
