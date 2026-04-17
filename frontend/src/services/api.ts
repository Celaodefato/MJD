const API_URL = 'http://localhost:3000/api';

export const api = {
  getProducts: async (category?: string, search?: string) => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    
    // Fall back to mock if API is not running
    try {
      const res = await fetch(`${API_URL}/products?${params.toString()}`);
      if (!res.ok) throw new Error('API Error');
      return res.json();
    } catch {
      console.warn("Using mock products due to API error/unavailability");
      return [
        { id: 1, name: 'Guitarra Stratocaster Vintage', price: 2999.00, category: { name: 'Cordas' }, image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=400' },
        { id: 2, name: 'Violão Acústico Folk', price: 1500.00, category: { name: 'Cordas' }, image: 'https://images.unsplash.com/photo-1550998118-2acb480b2a8f?auto=format&fit=crop&q=80&w=400' }
      ];
    }
  },
  
  getProductById: async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/products/${id}`);
      if (!res.ok) throw new Error('API Error');
      return res.json();
    } catch {
      console.warn("Using mock product details");
      return {
        id,
        name: 'Guitarra Stratocaster Vintage Sunburst',
        price: 2999.00,
        description: 'Mock data description.',
        stock: 5,
        image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=1000'
      };
    }
  },

  createOrder: async (data: any) => {
    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Falha ao criar o pedido');
    return res.json();
  }
};
