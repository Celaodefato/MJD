import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft, Shield, Truck, RotateCcw, Check, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

const fmt = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setLoading(true);
      setError(false);
      try {
        const data = await api.getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-deep flex flex-col items-center justify-center text-white/20">
        <Loader2 size={48} className="animate-spin mb-4" />
        <p>Carregando detalhes do produto...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-deep flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <p className="text-white/40 mb-8">O instrumento que você procura não está mais disponível ou o link está quebrado.</p>
        <Link to="/catalog" className="btn-primary">Voltar ao Catálogo</Link>
      </div>
    );
  }

  const productImage = Array.isArray(product.images) ? product.images[0] : (product.images?.split(',')[0] || product.image);

  return (
    <div className="min-h-screen bg-deep py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link to="/catalog" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Voltar para o Catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-square rounded-3xl overflow-hidden glass border-white/5 shadow-2xl">
              <img 
                src={productImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-new">Novo</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-secondary fill-secondary" />)}
              </div>
              <span className="text-white/30 text-sm">(24 avaliações)</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4 leading-tight">
              {product.name.toUpperCase()}
            </h1>
            
            <p className="text-white/50 text-lg mb-8 leading-relaxed max-w-xl">
              {product.description}
            </p>

            <div className="glass p-6 md:p-8 mb-8 border-secondary/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-secondary font-display tracking-tight">
                  {fmt(product.price)}
                </span>
                <span className="text-white/30 line-through text-lg">
                  {fmt(product.price * 1.2)}
                </span>
              </div>
              <p className="text-white/40 text-sm mb-6">
                em até 12x de <span className="text-white/80 font-bold">{fmt(product.price / 12)}</span> sem juros no cartão
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="btn-primary flex-1 flex justify-center items-center gap-3 py-4 text-xl shadow-glow-amber h-14"
                >
                  <ShoppingCart size={22} /> Adicionar ao Carrinho
                </button>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold px-4 py-2 rounded-xl bg-emerald-400/5 border border-emerald-400/10">
                  <Check size={18} /> Em estoque
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-widest font-bold">
                <Shield size={20} className="text-secondary/50" />
                <span>Garantia de<br/>12 meses</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-widest font-bold">
                <Truck size={20} className="text-secondary/50" />
                <span>Entrega<br/>Segura</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-widest font-bold">
                <RotateCcw size={20} className="text-secondary/50" />
                <span>Devolução<br/>Grátis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
