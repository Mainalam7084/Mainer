"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContainer } from "@/components/ui/card-container";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ItemCategory } from "@/lib/types";

export function AddItemForm() {
  const [category, setCategory] = useState<ItemCategory>("card");
  const [imagePreview, setImagePreview] = useState<string>("");

  return (
    <form className="grid gap-5 md:grid-cols-3">
      <CardContainer className="space-y-4 md:col-span-2">
        <div className="grid gap-4 md:grid-cols-2">
      <label className="space-y-1">
        <span className="text-sm font-semibold text-vault-muted">Category</span>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value as ItemCategory)}
        >
          <option value="card">Football Card</option>
          <option value="coin">Coin</option>
          <option value="banknote">Banknote</option>
        </Select>
      </label>
      <label className="space-y-1">
        <span className="text-sm font-semibold text-vault-muted">Name</span>
        <Input placeholder="2018 Mbappe Select Silver" />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-semibold text-vault-muted">Price</span>
        <Input type="number" placeholder="249.99" />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-semibold text-vault-muted">Purchase Date</span>
        <Input type="date" />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-semibold text-vault-muted">Purchase Place</span>
        <Input placeholder="eBay / Whatnot / Local Show" />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-semibold text-vault-muted">Image URL</span>
        <Input
          placeholder="https://..."
          value={imagePreview}
          onChange={(event) => setImagePreview(event.target.value)}
        />
      </label>
      </div>

      <div className="grid gap-4 transition-all duration-300 md:grid-cols-2">
      {category === "card" && (
        <div className="contents">
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Player</span>
            <Input placeholder="Kylian Mbappe" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Team</span>
            <Input placeholder="Real Madrid" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Collection</span>
            <Input placeholder="Prizm / Select / Topps" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Serial Number</span>
            <Input placeholder="1/10" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Type</span>
            <Select>
              <option>auto</option>
              <option>patch</option>
              <option>base</option>
              <option>case hit</option>
            </Select>
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Condition</span>
            <Input placeholder="Near Mint" />
          </label>
        </div>
      )}

      {category === "coin" && (
        <div className="contents">
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Country</span>
            <Input placeholder="France" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Year</span>
            <Input type="number" placeholder="1901" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Material</span>
            <Input placeholder="Silver / Gold / Copper" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Condition</span>
            <Input placeholder="XF" />
          </label>
        </div>
      )}

      {category === "banknote" && (
        <div className="contents">
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Country</span>
            <Input placeholder="Japan" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Currency</span>
            <Input placeholder="JPY" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Year</span>
            <Input type="number" placeholder="1984" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-semibold text-vault-muted">Condition</span>
            <Input placeholder="AU" />
          </label>
        </div>
      )}
      </div>

      <label className="space-y-1">
        <span className="text-sm font-semibold text-vault-muted">Notes</span>
        <textarea
          className="w-full rounded-lg border-2 border-vault-border bg-vault-soft px-3 py-2 text-sm text-vault-text outline-none transition-all duration-200 placeholder:text-vault-muted focus:border-vault-primary focus:shadow-vault-hover"
          rows={3}
          placeholder="Provenance, grading ideas, scratch notes..."
        />
      </label>
      <div>
        <Button type="submit" className="animate-soft-glow">
          Save To Vault
        </Button>
      </div>
      </CardContainer>

      <CardContainer className="md:col-span-1">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-vault-muted">Preview</p>
        <div className="mt-3 overflow-hidden rounded-vault border-2 border-vault-border bg-vault-soft">
          {imagePreview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imagePreview} alt="Preview" className="h-72 w-full object-cover" />
          ) : (
            <div className="grid h-72 place-content-center text-sm text-vault-muted">
              Paste an image URL to preview your item
            </div>
          )}
        </div>
      </CardContainer>
    </form>
  );
}
