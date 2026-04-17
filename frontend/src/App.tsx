import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Music } from 'lucide-react';

// Imported pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-deep">
      {/* ─── Header ────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center group-hover:shadow-glow-amber transition-shadow">
              <Music size={18} className="text-deep" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              MJD <span className="text-gradient">Instrumentos</span>
            </span>
          </Link>

          <nav className="flex gap-6 items-center text-sm font-medium">
            <Link to="/catalog" className="text-white/60 hover:text-white transition-colors duration-200">Produtos</Link>
            <Link to="/cart" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 relative">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Carrinho</span>
              {/* Badge count */}
              <span className="absolute -top-1.5 -right-2 bg-secondary text-deep text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-16" />

      <main className="flex-1">
        {children}
      </main>

      {/* ─── Footer ────────────────────────────────── */}
      <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Music size={16} className="text-deep" />
                </div>
                <span className="text-lg font-bold">MJD <span className="text-gradient">Instrumentos</span></span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Sua loja online de instrumentos musicais. Qualidade, paixão e os melhores preços do Brasil.
              </p>
            </div>
            {/* Links */}
            <div>
              <h4 className="text-white/80 font-semibold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-white/40 hover:text-secondary transition-colors">Home</Link></li>
                <li><Link to="/catalog" className="text-white/40 hover:text-secondary transition-colors">Catálogo</Link></li>
                <li><Link to="/cart" className="text-white/40 hover:text-secondary transition-colors">Carrinho</Link></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-white/80 font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>contato@mjdinstrumentos.com</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 text-center text-white/20 text-xs">
            &copy; {new Date().getFullYear()} MJD Instrumentos Musicais. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
