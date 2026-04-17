import { Link } from 'react-router-dom';
import { ShoppingCart, Search, SlidersHorizontal, Flame, Sparkles, Star } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Guitarra Stratocaster Vintage Sunburst', price: 2999.00, category: 'Cordas', badge: 'hot', image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Violão Acústico Folk Premium', price: 1500.00, category: 'Cordas', badge: 'new', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Teclado Arranjador 61 Teclas', price: 1850.50, category: 'Teclas', badge: 'promo', image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Bateria Acústica 5 Peças', price: 4200.00, category: 'Percussão', badge: '', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Guitarra Les Paul Studio', price: 3499.00, category: 'Cordas', badge: 'hot', image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Baixo Jazz Bass 4 Cordas', price: 2799.00, category: 'Cordas', badge: '', image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=600' },
];

const fmt = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

const BadgeEl = ({ type }: { type: string }) => {
  if (type === 'hot') return <span className="badge-hot"><Flame size={10} /> Top</span>;
  if (type === 'new') return <span className="badge-new"><Sparkles size={10} /> Novo</span>;
  if (type === 'promo') return <span className="badge-promo"><Star size={10} /> Oferta</span>;
  return null;
};

const Catalog = () => {
  return (
    <div className="min-h-screen bg-deep">
      {/* Header Banner */}
      <div className="bg-surface border-b border-white/5 py-10">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">CATÁLOGO</h1>
          <p className="text-white/40">Encontre o instrumento perfeito para sua música.</p>
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
              <div className="relative mb-6">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:bg-white/10 transition-colors placeholder:text-white/20"
                />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Categorias</h3>
                <ul className="space-y-2">
                  {['Cordas', 'Sopro', 'Percussão', 'Teclas', 'Acessórios'].map(c => (
                    <li key={c}>
                      <label className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 cursor-pointer transition-colors">
                        <input type="checkbox" className="accent-secondary rounded" />
                        {c}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Ordenar</h3>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-primary/50 transition-colors">
                  <option>Mais recentes</option>
                  <option>Menor preço</option>
                  <option>Maior preço</option>
                </select>
              </div>
            </div>
          </aside>

          {/* ─── Grid ─── */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-white/30 text-sm">{MOCK_PRODUCTS.length} produtos encontrados</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_PRODUCTS.map((product) => (
                <div key={product.id} className="card-product group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-square overflow-hidden bg-panel relative">
                      <img
                        src={product.image}
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{product.category}</span>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-white/90 mt-1 mb-3 line-clamp-2 group-hover:text-white transition-colors leading-snug">{product.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-secondary">{fmt(product.price)}</span>
                        <span className="block text-[11px] text-white/25 mt-0.5">12x de {fmt(product.price / 12)}</span>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-secondary hover:text-deep hover:border-secondary transition-all duration-200 hover:shadow-glow-amber">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
