import { BanknoteDetails, CardDetails, CoinDetails, Item } from "@/lib/types";

export const items: Item[] = [
  {
    id: "1",
    name: "Lamine Yamal Sapphire Rookie",
    category: "card",
    image_url:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    price: 720,
    purchase_date: "2026-01-12",
    purchase_place: "Whatnot",
    notes: "Centering is clean, potential grading candidate.",
    created_at: "2026-02-20",
    rarity: "Legendary",
  },
  {
    id: "2",
    name: "Swiss 20 Franc Helvetia",
    category: "coin",
    image_url:
      "https://images.unsplash.com/photo-1613203383524-9f4f4c14fd36?auto=format&fit=crop&w=900&q=80",
    price: 440,
    purchase_date: "2025-11-02",
    purchase_place: "Local Auction",
    notes: "Small rim nick on reverse side.",
    created_at: "2026-02-18",
    rarity: "Rare",
  },
  {
    id: "3",
    name: "1963 Red Seal Two Dollars",
    category: "banknote",
    image_url:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=900&q=80",
    price: 190,
    purchase_date: "2026-02-04",
    purchase_place: "eBay",
    notes: "Crisp folds, strong serial ink.",
    created_at: "2026-02-21",
    rarity: "Common",
  },
];

export const cardDetails: CardDetails[] = [
  {
    item_id: "1",
    player: "Lamine Yamal",
    team: "FC Barcelona",
    collection: "Topps Sapphire",
    serial_number: "1/10",
    type: "case_hit",
    condition: "Near Mint",
  },
];

export const coinDetails: CoinDetails[] = [
  {
    item_id: "2",
    country: "Switzerland",
    year: 1947,
    material: "Gold",
    condition: "XF",
  },
];

export const banknoteDetails: BanknoteDetails[] = [
  {
    item_id: "3",
    country: "United States",
    currency: "USD",
    year: 1963,
    condition: "VF",
  },
];
