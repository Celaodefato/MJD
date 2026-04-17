import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Check, ShieldCheck, Truck, ArrowLeft, Star } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  const product = {
    id,
    name: 'Guitarra Stratocaster Vintage Sunburst',
    price: 2999.00,
    installments: 'ou 12x de R$ 249,91 s/ juros',
    description: 'A Stratocaster Vintage oferece o clássico timbre estalado que moldou a história da música. Conta com corpo em Alder, braço em Maple perfil "C", e três captadores single-coil oferecendo versatilidade incrível. Ideal para blues, rock, funk e country.',
    stock: 5,
    specs: ['Corpo: Alder', 'Braço: Maple em "C"', 'Captadores: 3x Single-coil', 'Escala: Pau-ferro 25.5"', 'Trastes: 22 Medium Jumbo'],
    image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=1000'
  };

  const fmt = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

  return (
    <div className="min-h-screen bg-deep">
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <Link to="/catalog" className="inline-flex items-center gap-2 text-white/30 hover:text-secondary text-sm mb-8 transition-colors">
          <ArrowLeft size={14} /> Voltar ao catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ─── Image ─── */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl scale-90 group-hover:scale-95 transition-transform duration-700" />
            <div className="relative rounded-3xl overflow-hidden bg-surface border border-white/5 aspect-square flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* ─── Info ─── */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Cordas &gt; Guitarras</span>
            <h1 className="font-display text-4xl lg:text-5xl tracking-wide mb-6 leading-[1.1]">{product.name.toUpperCase()}</h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-secondary fill-secondary" />)}
              </div>
              <span className="text-white/30 text-xs">(42 avaliações)</span>
            </div>

            {/* Stock */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-400/20">
                <Check size={12} /> Em Estoque ({product.stock} unid.)
              </span>
            </div>

            {/* Price */}
            <div className="glass p-6 mb-8">
              <div className="text-4xl font-bold text-secondary mb-1">{fmt(product.price)}</div>
              <div className="text-white/30 text-sm">{product.installments}</div>
            </div>

            {/* Add to cart */}
            <button className="btn-primary flex items-center justify-center gap-3 w-full py-4 text-lg mb-6">
              <ShoppingCart size={22} />
              Adicionar ao Carrinho
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 text-xs text-white/30 mb-10">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/5">
                <Truck size={16} className="text-secondary shrink-0" /> Frete calculado no checkout
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/5">
                <ShieldCheck size={16} className="text-secondary shrink-0" /> Garantia de 1 ano
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-white/5 pt-8">
              <h3 className="font-display text-2xl tracking-wide mb-4">DESCRIÇÃO</h3>
              <p className="text-white/50 leading-relaxed mb-6">{product.description}</p>

              <h3 className="font-display text-2xl tracking-wide mb-4">ESPECIFICAÇÕES</h3>
              <ul className="space-y-2">
                {product.specs.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
