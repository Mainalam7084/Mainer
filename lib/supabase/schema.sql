create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null check (category in ('card', 'coin', 'banknote')),
  image_url text,
  price numeric(12,2) not null default 0,
  purchase_date date,
  purchase_place text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.card_details (
  item_id uuid primary key references public.items(id) on delete cascade,
  player text,
  team text,
  collection text,
  serial_number text,
  type text check (type in ('auto', 'patch', 'base', 'case_hit')),
  condition text
);

create table if not exists public.coin_details (
  item_id uuid primary key references public.items(id) on delete cascade,
  country text,
  year int,
  material text,
  condition text
);

create table if not exists public.banknote_details (
  item_id uuid primary key references public.items(id) on delete cascade,
  country text,
  currency text,
  year int,
  condition text
);
