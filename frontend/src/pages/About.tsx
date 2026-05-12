import React from 'react';
import { Shield, Hammer, Truck, Music, Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-deep overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-secondary font-bold uppercase tracking-[0.4em] text-sm mb-6 animate-slide-up">
            MJD • INSTRUMENTOS MUSICAIS • 2024
          </p>
          <h1 className="font-display text-6xl md:text-8xl tracking-wide mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            GUARDIÕES DO <span className="text-gradient">SOM</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            "Para o mercado, instrumento musical é mercadoria. Para nós, é a extensão da alma do músico."
          </p>
        </div>
      </section>

      {/* Nossa História / Como Nascemos */}
      <section className="py-20 bg-surface/50 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest">
                Como Nascemos
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-wide leading-tight">
                CANSADOS DO INSTRUMENTO <br />
                QUE CHEGAVA <span className="text-secondary">FRIO</span>
              </h2>
              <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
                <p>
                  "A MJD não nasceu de uma planilha de negócios, ela nasceu de uma frustração que nós, como músicos, sentimos na pele."
                </p>
                <p>
                  A gente cansou de ver instrumento sendo vendido como se fosse caixa de sabão em pó. Você comprava, chegava em casa ansioso, e quando tirava da caixa... a decepção. Cordas altas, braço desregulado, trastejando, o sonho virava dor de cabeça.
                </p>
                <p>
                  Decidimos parar de aceitar isso. Criamos a MJD para ser a loja que nós gostaríamos de ter encontrado.
                </p>
              </div>
            </div>
            <div className="glass p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
              <p className="text-white/80 text-xl italic leading-relaxed relative z-10">
                "Aqui, a regra é clara: nada sai sem passar pela bancada. Queremos resgatar o prazer da compra. Se não estiver perfeito para tocar, não está pronto para você. Essa é a nossa promessa."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-1 h-px bg-secondary" />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Nossa Verdade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecossistema Musical */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-wide mb-6">NOSSO ECOSSISTEMA</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Não somos apenas uma loja online, nem apenas uma oficina. Somos um Ecossistema Musical completo focado na sua performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Curadoria */}
            <div className="glass p-10 hover:border-secondary/30 transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Music size={32} className="text-secondary" />
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-4">CURADORIA (VENDA)</h3>
              <p className="text-white/40 leading-relaxed">
                Selecionamos instrumentos novos e seminovos com olhar crítico. Cada peça é escolhida pela sua sonoridade e potencial.
              </p>
            </div>

            {/* Restauração */}
            <div className="glass p-10 hover:border-secondary/30 transition-all duration-500 group border-secondary/20 bg-secondary/5">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Hammer size={32} className="text-secondary" />
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-4 text-secondary">RESTAURAÇÃO (LUTHIERIA)</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                Recuperamos e ajustamos cada detalhe na nossa bancada, devolvendo a vida à madeira e garantindo a tocabilidade perfeita.
              </p>
            </div>

            {/* Logística */}
            <div className="glass p-10 hover:border-secondary/30 transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Truck size={32} className="text-secondary" />
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-4">LOGÍSTICA (ENTREGA)</h3>
              <p className="text-white/40 leading-relaxed">
                Tratamos o envio com o rigor de quem transporta uma obra de arte. Embalagem especial e seguro total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Missão */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <Target size={24} />
                <h3 className="font-display text-3xl tracking-wide uppercase">Missão</h3>
              </div>
              <p className="text-white/50 leading-relaxed">
                Eliminar o risco da compra online. Nossa missão é entregar não apenas uma caixa, mas a performance pronta. Unimos a agilidade do e-commerce com o rigor técnico da luthieria para que o músico só tenha o trabalho de tocar.
              </p>
            </div>

            {/* Visão */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <Eye size={24} />
                <h3 className="font-display text-3xl tracking-wide uppercase">Visão</h3>
              </div>
              <p className="text-white/50 leading-relaxed">
                Ser a autoridade máxima em instrumentos no Brasil. Queremos ser a única marca onde o músico compra de olhos fechados, sabendo que, se tem o selo MJD, a curadoria é impecável e o instrumento é real.
              </p>
            </div>

            {/* Valores */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <Heart size={24} />
                <h3 className="font-display text-3xl tracking-wide uppercase">Valores</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-white/50 text-sm">
                  <CheckCircle2 size={18} className="text-secondary shrink-0" />
                  <span>O cliente vê o que compra. Sem maquiagem, sem filtro.</span>
                </li>
                <li className="flex gap-3 text-white/50 text-sm">
                  <CheckCircle2 size={18} className="text-secondary shrink-0" />
                  <span>Precisão Obsessiva: Do ajuste do traste à fita da embalagem, o detalhe importa.</span>
                </li>
                <li className="flex gap-3 text-white/50 text-sm">
                  <CheckCircle2 size={18} className="text-secondary shrink-0" />
                  <span>Alma de Músico: Tecnologia no processo, calor humano no atendimento.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Essence */}
      <section className="py-20 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-secondary font-display text-2xl tracking-[0.2em] uppercase">
            Respeitamos o instrumento tanto quanto respeitamos quem vai tocá-lo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
