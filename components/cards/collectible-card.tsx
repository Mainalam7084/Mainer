import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { categoryColor, categoryLabel, formatCurrency } from "@/lib/helpers/collection";
import { Item } from "@/lib/types";

export function CollectibleCard({ item }: { item: Item }) {
  const rare = item.rarity !== "Common";

  return (
    <Link
      href={`/items/${item.id}`}
      className={`group block rounded-vault border-2 p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] ${
        rare
          ? "border-vault-accent bg-vault-card shadow-gold hover:shadow-gold"
          : "border-vault-border bg-vault-card shadow-vault hover:shadow-vault-hover"
      }`}
    >
      <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border-2 border-vault-border">
        <Image
          src={item.image_url}
          alt={item.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-2 flex items-center justify-between">
        <Badge className={categoryColor[item.category]}>{categoryLabel[item.category]}</Badge>
        <Badge className="bg-vault-soft text-vault-text">{item.rarity}</Badge>
      </div>
      <h3 className="line-clamp-1 text-lg font-black text-vault-text">{item.name}</h3>
      <p className="mt-1 text-sm text-vault-muted">{item.purchase_place}</p>
      <p className="mt-3 text-xl font-black text-vault-primary">{formatCurrency(item.price)}</p>
    </Link>
  );
}
