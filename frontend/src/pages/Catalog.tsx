import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Search, SlidersHorizontal, Flame, Sparkles, Star, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

const fmt = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

const BadgeEl = ({ type }: { type: string | null }) => {
  if (type === 'hot') return <span className="badge-hot"><Flame size={10} /> Top</span>;
  if (type === 'new') return <span className="badge-new"><Sparkles size={10} /> Novo</span>;
  if (type === 'promo') return <span className="badge-promo"><Star size={10} /> Oferta</span>;
  return null;
};

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const category = searchParams.get('cat');
  const search = searchParams.get('q');
  const isPromo = searchParams.get('promo') === 'true';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await api.getProducts(category || undefined, search || undefined);
        let filtered = data;
        
        // Front-only promo filter if DB doesn't support it directly yet
        if (isPromo) {
          filtered = data.filter((p: any) => p.badge === 'promo' || p.price < 1000);
        }
        
        setProducts(filtered);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, search, isPromo]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value;
    setSearchParams(prev => {
      if (query) prev.set('q', query);
      else prev.delete('q');
      return prev;
    });
  };

  const toggleCategory = (cat: string) => {
    setSearchParams(prev => {
      const current = prev.get('cat');
      if (current === cat.toLowerCase()) prev.delete('cat');
      else prev.set('cat', cat.toLowerCase());
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-deep">
      {/* Header Banner */}
      <div className="bg-surface border-b border-white/5 py-10">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4 uppercase">
            {category ? category : 'CATÁLOGO'}
          </h1>
          <p className="text-white/40">
            {category ? `Explorando instrumentos de ${category}` : 'Encontre o instrumento perfeito para sua música.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* ─── Sidebar ─── */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="glass p-6 sticky top-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-5 flex items-center gap-2">
                <SlidersHorizontal size={14} /> Filtros
              </h2>

              {/* Search */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  name="search"
                  type="text"
                  placeholder="Buscar..."
                  defaultValue={search || ''}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:bg-white/10 transition-colors placeholder:text-white/20"
                />
              </form>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Categorias</h3>
                <ul className="space-y-2">
                  {['Cordas', 'Sopro', 'Percussão', 'Teclas', 'Acessórios'].map(c => (
                    <li key={c}>
                      <label className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 cursor-pointer transition-colors">
                        <input 
                          type="checkbox" 
                          className="accent-secondary rounded" 
                          checked={category === c.toLowerCase()}
                          onChange={() => toggleCategory(c)}
                        />
                        {c}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promo Filter */}
              <div className="mb-6 pt-4 border-t border-white/5">
                <label className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 cursor-pointer transition-colors">
                  <input 
                    type="checkbox" 
                    className="accent-secondary rounded" 
                    checked={isPromo}
                    onChange={(e) => setSearchParams(prev => {
                      if (e.target.checked) prev.set('promo', 'true');
                      else prev.delete('promo');
                      return prev;
                    })}
                  />
                  <span>Apenas Promoções</span>
                </label>
              </div>
            </div>
          </aside>

          {/* ─── Grid ─── */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-white/30 text-sm">
                {loading ? 'Carregando...' : `${products.length} produtos encontrados`}
              </p>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 text-white/20">
                <Loader2 size={48} className="animate-spin mb-4" />
                <p>Buscando instrumentos...</p>
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="card-product group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-square overflow-hidden bg-panel relative">
                        <img
                          src={Array.isArray(product.images) ? product.images[0] : (product.images?.split(',')[0] || product.image)}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.badge && (
                          <div className="absolute top-3 left-3">
                            <BadgeEl type={product.badge} />
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                        {product.categories?.name || product.category}
                      </span>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold text-white/90 mt-1 mb-3 line-clamp-2 group-hover:text-white transition-colors leading-snug">{product.name}</h3>
                      </Link>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-secondary">{fmt(product.price)}</span>
                          <span className="block text-[11px] text-white/25 mt-0.5">12x de {fmt(product.price / 12)}</span>
                        </div>
                        <button 
                          onClick={() => addToCart(product)}
                          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-secondary hover:text-deep hover:border-secondary transition-all duration-200 hover:shadow-glow-amber active:scale-95"
                        >
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 glass">
                <Search size={48} className="mx-auto text-white/10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
                <p className="text-white/40">Tente ajustar seus filtros ou busca.</p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="btn-secondary mt-6"
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
