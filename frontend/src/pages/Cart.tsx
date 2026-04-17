import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const items = [
    { id: 1, name: 'Guitarra Stratocaster Vintage Sunburst', price: 2999.00, quantity: 1, image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=200' },
  ];

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freight = 50.00;
  const total = subtotal + freight;
  const fmt = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

  return (
    <div className="min-h-screen bg-deep py-10">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-10 flex items-center gap-4">
          <ShoppingBag className="text-secondary" size={36} /> MEU CARRINHO
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Items */}
          <div className="flex-1 space-y-4">
            {items.map(item => (
              <div key={item.id} className="glass flex flex-col sm:flex-row gap-4 p-4 items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl border border-white/5" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white/90 truncate">{item.name}</h3>
                  <p className="text-secondary font-bold mt-1">{fmt(item.price)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
                  <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
                <span className="font-bold text-lg text-white/80 w-28 text-right">{fmt(item.price * item.quantity)}</span>
                <button className="text-red-400/50 hover:text-red-400 p-2 rounded-full hover:bg-red-400/10 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96">
            <div className="glass p-6 sticky top-24">
              <h2 className="font-display text-2xl tracking-wide mb-6">RESUMO</h2>
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between text-white/40">
                  <span>Subtotal ({items.length} item)</span>
                  <span className="text-white/70 font-semibold">{fmt(subtotal)}</span>
                </div>
                <div className="flex justify-between text-white/40">
                  <span>Frete estimado</span>
                  <span className="text-white/70 font-semibold">{fmt(freight)}</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white/80">Total</span>
                  <span className="text-2xl font-bold text-secondary">{fmt(total)}</span>
                </div>
              </div>
              <Link to="/checkout" className="btn-primary w-full flex justify-center items-center gap-2 py-4 text-lg">
                Finalizar Compra <ArrowRight size={18} />
              </Link>
              <Link to="/catalog" className="text-white/30 hover:text-secondary text-sm font-semibold mt-4 flex justify-center transition-colors">
                Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
