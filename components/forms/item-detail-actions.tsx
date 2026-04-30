"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardDetails, ItemWithDetails, UpdateItemInput } from "@/lib/types";

export function ItemDetailActions({ item }: { item: ItemWithDetails }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const details =
        item.category === "card"
          ? {
              player: String(formData.get("player") ?? ""),
              team: String(formData.get("team") ?? ""),
              collection: String(formData.get("collection") ?? ""),
              serial_number: String(formData.get("serial_number") ?? ""),
              type: String(formData.get("type") ?? "base") as CardDetails["type"],
              condition: String(formData.get("condition") ?? ""),
            }
          : item.category === "coin"
            ? {
                country: String(formData.get("country") ?? ""),
                year: Number(formData.get("year") ?? 0),
                material: String(formData.get("material") ?? ""),
                condition: String(formData.get("condition") ?? ""),
              }
            : {
                country: String(formData.get("country") ?? ""),
                currency: String(formData.get("currency") ?? ""),
                year: Number(formData.get("year") ?? 0),
                condition: String(formData.get("condition") ?? ""),
              };

      const payload: UpdateItemInput = {
        name: String(formData.get("name") ?? ""),
        image_url: String(formData.get("image_url") ?? ""),
        price: Number(formData.get("price") ?? 0),
        purchase_date: String(formData.get("purchase_date") ?? ""),
        purchase_place: String(formData.get("purchase_place") ?? ""),
        notes: String(formData.get("notes") ?? ""),
        details,
      };

      const response = await fetch(`/api/items/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: item.category, data: payload }),
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(body.error ?? "Failed to update item.");
      setMessage("Item updated.");
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to update item.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    setIsSaving(true);
    try {
      const response = await fetch(`/api/items/${item.id}`, { method: "DELETE" });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(body.error ?? "Failed to delete item.");
      router.push("/collection");
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to delete item.");
      setIsSaving(false);
    }
  }

  return (
    <div className="mt-6 space-y-4">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="grid gap-3 rounded-vault border-[3px] border-vault-border p-3">
          <Input name="name" defaultValue={item.name} required />
          <Input name="image_url" defaultValue={item.image_url} required />
          <Input name="price" type="number" defaultValue={item.price} required />
          <Input name="purchase_date" type="date" defaultValue={item.purchase_date} required />
          <Input name="purchase_place" defaultValue={item.purchase_place} required />
          <Input name="notes" defaultValue={item.notes} required />

          {item.category === "card" && item.details && "player" in item.details ? (
            <>
              <Input name="player" defaultValue={item.details.player} required />
              <Input name="team" defaultValue={item.details.team} required />
              <Input name="collection" defaultValue={item.details.collection} required />
              <Input name="serial_number" defaultValue={item.details.serial_number} required />
              <Input name="type" defaultValue={item.details.type} required />
              <Input name="condition" defaultValue={item.details.condition} required />
            </>
          ) : null}

          {item.category === "coin" && item.details && "material" in item.details ? (
            <>
              <Input name="country" defaultValue={item.details.country} required />
              <Input name="year" type="number" defaultValue={item.details.year} required />
              <Input name="material" defaultValue={item.details.material} required />
              <Input name="condition" defaultValue={item.details.condition} required />
            </>
          ) : null}

          {item.category === "banknote" && item.details && "currency" in item.details ? (
            <>
              <Input name="country" defaultValue={item.details.country} required />
              <Input name="currency" defaultValue={item.details.currency} required />
              <Input name="year" type="number" defaultValue={item.details.year} required />
              <Input name="condition" defaultValue={item.details.condition} required />
            </>
          ) : null}

          <div className="flex gap-2">
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => setIsEditing(true)}>Edit Item</Button>
          <Button variant="danger" onClick={() => setConfirmDelete(true)}>
            Delete
          </Button>
          <Link href="/collection" className="inline-flex items-center text-sm text-vault-muted">
            Back to collection
          </Link>
        </div>
      )}

      {confirmDelete ? (
        <div className="rounded-vault border-[3px] border-vault-border bg-white p-4 shadow-vault">
          <h4 className="text-lg font-black">Confirm Delete</h4>
          <p className="text-sm text-vault-muted">
            This will permanently remove the item and its detail record.
          </p>
          <div className="mt-3 flex gap-2">
            <Button variant="danger" onClick={handleDelete} disabled={isSaving}>
              Yes, Delete
            </Button>
            <Button variant="secondary" onClick={() => setConfirmDelete(false)}>
              Cancel
            </Button>
          </div>
        </div>
      ) : null}

      {message ? <p className="text-sm text-vault-muted">{message}</p> : null}
    </div>
  );
}
