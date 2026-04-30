import { AddItemForm } from "@/components/forms/add-item-form";
import { AppShell } from "@/components/layout/app-shell";

export default function AddPage() {
  return (
    <AppShell
      title="Add New Piece"
      subtitle="Dynamic form with image preview and category-aware metadata."
    >
      <AddItemForm />
    </AppShell>
  );
}
