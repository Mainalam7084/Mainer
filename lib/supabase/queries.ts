import { items as mockItems } from "@/lib/mock-data";
import { Item } from "@/lib/types";
import { createClient } from "@/lib/supabase/server";

export async function getItems(): Promise<Item[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return mockItems;
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) {
    return mockItems;
  }

  return (data as Omit<Item, "rarity">[]).map((entry) => ({
    ...entry,
    rarity: "Common",
  }));
}
