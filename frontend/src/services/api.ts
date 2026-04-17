import { supabase } from '../lib/supabase';

export const api = {
  getProducts: async (categorySlug?: string, search?: string) => {
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
    
    if (error) {
      console.error('Supabase Error:', error);
      // Fallback a mock em caso de erro (ex: banco ainda não configurado pelo user)
      return [
        { 
          id: 1, 
          name: 'Guitarra Stratocaster Vintage (MOCK)', 
          price: 2999.00, 
          categories: { name: 'Cordas' }, 
          images: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=400' 
        }
      ];
    }
    
    return data;
  },
  
  getProductById: async (id: string | number) => {
    const { data, error } = await supabase
      .from('products')
      .select('*, categories(*)')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Supabase Error:', error);
      throw new Error('Produto não encontrado');
    }
    
    return data;
  },

  createOrder: async (orderData: any, items: any[]) => {
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
  }
};
