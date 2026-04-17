-- Supabase Schema for MJD Instrumentos Musicais

-- Enable RLS
-- (Optional: You can enable this later in the dashboard)

-- 1. Categories
CREATE TABLE public.categories (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Products
CREATE TABLE public.products (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  description TEXT,
  price DOUBLE PRECISION NOT NULL,
  stock INTEGER DEFAULT 0,
  images TEXT, -- Comma separated URLs for MVP
  is_active BOOLEAN DEFAULT TRUE,
  category_id BIGINT REFERENCES public.categories(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Orders
CREATE TABLE public.orders (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  street TEXT NOT NULL,
  number TEXT NOT NULL,
  complement TEXT,
  neighborhood TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  total_price DOUBLE PRECISION NOT NULL,
  status TEXT DEFAULT 'Novo', -- Novo, Em separação, Enviado, Concluído
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Order Items
CREATE TABLE public.order_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  order_id BIGINT REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id BIGINT REFERENCES public.products(id),
  quantity INTEGER NOT NULL,
  price DOUBLE PRECISION NOT NULL
);

-- 5. Admin Users
CREATE TABLE public.admin_users (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed Initial Data (Optional)
-- INSERT INTO public.categories (name, slug) VALUES 
-- ('Cordas', 'cordas'), ('Sopro', 'sopro'), ('Percussão', 'percussao'), ('Teclas', 'teclas');
