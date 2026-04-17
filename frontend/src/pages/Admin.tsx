import { useState } from 'react';
import { Lock, Package, ListOrdered } from 'lucide-react';

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-white/10 transition-colors placeholder:text-white/20";

  if (!loggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-deep px-4">
        <div className="glass p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-secondary" />
            </div>
            <h1 className="font-display text-3xl tracking-wide">ACESSO RESTRITO</h1>
            <p className="text-white/30 text-sm mt-2">Painel administrativo MJD</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }}>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5">E-mail</label>
                <input type="email" required className={inputClass} placeholder="admin@mjdinstrumentos.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5">Senha</label>
                <input type="password" required className={inputClass} placeholder="••••••••" />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full py-3.5">
              Entrar no Painel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep py-10">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl tracking-wide mb-10">DASHBOARD</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orders */}
          <div className="glass p-6">
            <h2 className="font-display text-2xl tracking-wide mb-6 flex items-center gap-2">
              <ListOrdered size={20} className="text-secondary" /> PEDIDOS
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-white/70">#1001 — João Silva</span>
                <span className="badge bg-secondary/20 text-secondary border border-secondary/30">Novo</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-white/70">#1002 — Maria Souza</span>
                <span className="badge bg-primary/20 text-primary border border-primary/30">Enviado</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="glass p-6">
            <h2 className="font-display text-2xl tracking-wide mb-6 flex items-center gap-2">
              <Package size={20} className="text-secondary" /> PRODUTOS
            </h2>
            <button className="btn-primary text-sm mb-4">+ Novo Produto</button>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-white/70">Guitarra Stratocaster Vintage</span>
                <span className="text-xs text-white/30">R$ 2.999 | Estq: 5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-sm text-white/70">Violão Acústico Folk Premium</span>
                <span className="text-xs text-white/30">R$ 1.500 | Estq: 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
