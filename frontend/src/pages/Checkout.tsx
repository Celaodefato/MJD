import { useState } from 'react';
import { Lock, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [step, setStep] = useState(1);

  if (step === 2) {
    return (
      <div className="min-h-screen bg-deep flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-slide-up">
          <div className="w-20 h-20 bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={36} />
          </div>
          <h1 className="font-display text-4xl tracking-wide mb-4">PEDIDO CONFIRMADO!</h1>
          <p className="text-white/40 mb-8">Recebemos o seu pedido. Em breve você receberá um e-mail com as instruções de pagamento e código de rastreio.</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            Voltar para a Home <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-white/10 transition-colors placeholder:text-white/20";

  return (
    <div className="min-h-screen bg-deep py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 flex items-center justify-center gap-2 text-emerald-400 font-semibold text-sm">
          <Lock size={14} />
          <span>Ambiente 100% Seguro</span>
        </div>

        <div className="glass p-8 md:p-10">
          <h1 className="font-display text-3xl tracking-wide mb-8 pb-4 border-b border-white/5">FINALIZAR PEDIDO</h1>

          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Dados Pessoais */}
              <div>
                <h2 className="text-secondary font-bold uppercase tracking-wider text-xs mb-5">1. Dados Pessoais</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">Nome Completo</label>
                    <input type="text" required className={inputClass} placeholder="João da Silva" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">E-mail</label>
                    <input type="email" required className={inputClass} placeholder="joao@exemplo.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">Telefone (WhatsApp)</label>
                    <input type="text" required className={inputClass} placeholder="(00) 00000-0000" />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <h2 className="text-secondary font-bold uppercase tracking-wider text-xs mb-5">2. Entrega</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">CEP</label>
                    <input type="text" required className={inputClass} placeholder="00000-000" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-white/40 mb-1.5">Rua/Avenida</label>
                      <input type="text" required className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5">Número</label>
                      <input type="text" required className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5">Bairro</label>
                      <input type="text" required className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5">Cidade</label>
                      <input type="text" required className={inputClass} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <h2 className="text-secondary font-bold uppercase tracking-wider text-xs mb-5">3. Pagamento</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="glass p-4 cursor-pointer flex items-center gap-3 border-primary/30 ring-1 ring-primary/30 hover:ring-primary/50 transition-all">
                  <input type="radio" name="payment" defaultChecked className="accent-secondary" />
                  <div>
                    <span className="font-semibold text-sm text-white/80">Pix</span>
                    <span className="block text-[11px] text-white/30">Aprovação imediata</span>
                  </div>
                </label>
                <label className="glass p-4 cursor-pointer flex items-center gap-3 hover:border-white/20 transition-all">
                  <input type="radio" name="payment" className="accent-secondary" />
                  <div>
                    <span className="font-semibold text-sm text-white/80">Cartão de Crédito</span>
                    <span className="block text-[11px] text-white/30">Até 12x sem juros</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <button type="submit" className="btn-primary py-4 px-12 text-lg flex items-center gap-2">
                Confirmar Compra <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
