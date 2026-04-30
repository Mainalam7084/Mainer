"use client";

import { useMemo, useState } from "react";
import { CollectibleCard } from "@/components/cards/collectible-card";
import { CardContainer } from "@/components/ui/card-container";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Item } from "@/lib/types";

export function CollectionGrid({ items }: { items: Item[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const bySearch = item.name.toLowerCase().includes(search.toLowerCase());
        const byCategory = category === "all" || item.category === category;
        const byPrice = !maxPrice || item.price <= Number(maxPrice);
        return bySearch && byCategory && byPrice;
      }),
    [category, items, maxPrice, search],
  );

  return (
    <>
      <CardContainer className="mb-5 grid gap-3 md:grid-cols-3">
        <Input placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="card">Football Cards</option>
          <option value="coin">Coins</option>
          <option value="banknote">Banknotes</option>
        </Select>
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max price"
        />
      </CardContainer>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {filteredItems.map((item) => (
          <CollectibleCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
