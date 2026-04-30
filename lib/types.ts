export type ItemCategory = "card" | "coin" | "banknote";

export type Rarity = "Common" | "Rare" | "Legendary";

export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  image_url: string;
  price: number;
  purchase_date: string;
  purchase_place: string;
  notes: string;
  created_at: string;
  rarity: Rarity;
}

export interface CardDetails {
  item_id: string;
  player: string;
  team: string;
  collection: string;
  serial_number: string;
  type: "auto" | "patch" | "base" | "case_hit";
  condition: string;
}

export interface CoinDetails {
  item_id: string;
  country: string;
  year: number;
  material: string;
  condition: string;
}

export interface BanknoteDetails {
  item_id: string;
  country: string;
  currency: string;
  year: number;
  condition: string;
}
