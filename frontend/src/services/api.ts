import { supabase } from '../lib/supabase';

// Helper for dev mock data
const MOCK_PRODUCTS = [
  { 
    id: 1, 
    name: 'Guitarra Stratocaster Vintage (MOCK)', 
    price: 2999.00, 
    badge: 'hot',
    categories: { name: 'Cordas' }, 
    images: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 2, 
    name: 'Teclado Arranjador Professional (MOCK)', 
    price: 1850.50, 
    badge: 'promo',
    categories: { name: 'Teclas' }, 
    images: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 3, 
    name: 'Bateria Acústica Premium (MOCK)', 
    price: 4500.00, 
    badge: 'new',
    categories: { name: 'Percussão' }, 
    images: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=400' 
  }
];

export const api = {
  getProducts: async (categorySlug?: string, search?: string) => {
    if (!supabase) {
      console.log('Using Mock Data: getProducts');
      let filtered = MOCK_PRODUCTS;
      if (categorySlug) {
        filtered = filtered.filter(p => p.categories.name.toLowerCase() === categorySlug.toLowerCase());
      }
      if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
      }
      return filtered;
    }

    try {
      let query = supabase
        .from('products')
        .select('*, categories!inner(*)')
        .eq('is_active', true);

      if (categorySlug) {
        query = query.eq('categories.slug', categorySlug);
      }

      if (search) {
        query = query.ilike('name', `%${search}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Supabase Error:', error);
      return MOCK_PRODUCTS;
    }
  },
  
  getProductById: async (id: string | number) => {
    if (!supabase) {
      console.log('Using Mock Data: getProductById');
      return MOCK_PRODUCTS.find(p => p.id === Number(id)) || MOCK_PRODUCTS[0];
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*, categories(*)')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Supabase Error:', error);
      return MOCK_PRODUCTS.find(p => p.id === Number(id)) || MOCK_PRODUCTS[0];
    }
  },

  createOrder: async (orderData: any, items: any[]) => {
    if (!supabase) {
      console.log('Using Mock Data: createOrder', orderData, items);
      return { id: 'mock-order-' + Date.now(), ...orderData };
    }

    try {
      // 1. Criar o pedido
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([orderData])
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Criar os itens do pedido
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      return order;
    } catch (error) {
      console.error('Supabase Error in createOrder:', error);
      throw error;
    }
  }
};
