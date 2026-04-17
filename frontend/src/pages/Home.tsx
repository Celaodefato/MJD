import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Star, Flame, Sparkles, Guitar, Drum, Piano, Wind } from 'lucide-react';

/* ───── Mock data ─────────────────────────────────────── */
const CATEGORIES = [
  { name: 'Cordas', sub: 'Violões, Guitarras, Baixos', icon: Guitar, color: 'from-amber-500/20 to-amber-900/40', border: 'border-amber-500/20', accent: 'text-amber-400' },
  { name: 'Sopro', sub: 'Saxofone, Flauta, Trompete', icon: Wind, color: 'from-sky-500/20 to-sky-900/40', border: 'border-sky-500/20', accent: 'text-sky-400' },
  { name: 'Percussão', sub: 'Bateria, Cajón, Pratos', icon: Drum, color: 'from-red-500/20 to-red-900/40', border: 'border-red-500/20', accent: 'text-red-400' },
  { name: 'Teclas', sub: 'Teclados, Pianos, Sintetizadores', icon: Piano, color: 'from-violet-500/20 to-violet-900/40', border: 'border-violet-500/20', accent: 'text-violet-400' },
];

const FEATURED = [
  { id: 1, name: 'Guitarra Stratocaster Vintage Sunburst', price: 2999, badge: 'hot', image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Violão Acústico Folk Premium', price: 1500, badge: 'new', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Teclado Arranjador 61 Teclas', price: 1850, badge: 'promo', image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Bateria Acústica 5 Peças Profissional', price: 4200, badge: 'hot', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=600' },
];

const BESTSELLERS = [
  { id: 5, name: 'Guitarra Les Paul Studio', price: 3499, image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Baixo Jazz Bass 4 Cordas', price: 2799, image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=600' },
  { id: 7, name: 'Cajón Elétrico FSA', price: 650, image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=600' },
];

const fmt = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

const BadgeEl = ({ type }: { type: string }) => {
  if (type === 'hot') return <span className="badge-hot"><Flame size={10} /> Top Seller</span>;
  if (type === 'new') return <span className="badge-new"><Sparkles size={10} /> Novo</span>;
  if (type === 'promo') return <span className="badge-promo"><Star size={10} /> Oferta</span>;
  return null;
};

/* ───── Component ─────────────────────────────────────── */
const Home = () => {
  return (
    <div className="overflow-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1920"
            alt="Stage"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Bokeh / stage lights */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-10 w-[200px] h-[200px] bg-accent-purple/15 rounded-full blur-[80px] animate-float" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <p className="text-secondary font-semibold uppercase tracking-[0.3em] text-sm mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-secondary inline-block" /> MJD Instrumentos Musicais
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 tracking-wide">
              SEU <span className="text-gradient">SOM</span>,<br/>
              NOSSA <span className="text-gradient">PAIXÃO</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed font-light">
              Instrumentos que inspiram. Explore nossa coleção premium de guitarras, violões, 
              teclados, baterias e muito mais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="btn-primary flex items-center gap-2 text-lg">
                Ver Instrumentos <ArrowRight size={18} />
              </Link>
              <Link to="/catalog?promo=true" className="btn-secondary flex items-center gap-2">
                Ver Promoções
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 section-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path fill="#0a0e1a" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ CATEGORIAS ═══════════════ */}
      <section className="py-20 bg-deep relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary uppercase tracking-[0.25em] text-xs font-bold mb-3">Explore por categoria</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">ENCONTRE SEU INSTRUMENTO</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  to={`/catalog?cat=${cat.name.toLowerCase()}`}
                  key={cat.name}
                  className={`card-category group aspect-[4/5] sm:aspect-[3/4] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br ${cat.color} border ${cat.border}`}
                >
                  {/* Icon */}
                  <div className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <Icon size={56} className={`${cat.accent} drop-shadow-lg`} strokeWidth={1.5} />
                  </div>
                  {/* Text */}
                  <h3 className="font-display text-3xl tracking-wider mb-2 group-hover:text-white transition-colors">{cat.name.toUpperCase()}</h3>
                  <p className="text-white/40 text-sm">{cat.sub}</p>
                  {/* CTA micro */}
                  <span className={`mt-4 text-xs font-semibold ${cat.accent} uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1`}>
                    Explorar <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ WAVE DIVIDER ═══════════════ */}
      <div className="section-wave bg-deep">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path fill="#111827" d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ═══════════════ LANÇAMENTOS ═══════════════ */}
      <section className="py-20 bg-surface relative">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-secondary uppercase tracking-[0.25em] text-xs font-bold mb-3">Novidades</p>
              <h2 className="font-display text-4xl md:text-5xl tracking-wide">LANÇAMENTOS</h2>
            </div>
            <Link to="/catalog" className="text-white/40 hover:text-secondary text-sm font-semibold transition-colors flex items-center gap-1 hidden md:flex">
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED.map((p) => (
              <div key={p.id} className="card-product group">
                <Link to={`/product/${p.id}`} className="block">
                  <div className="aspect-square overflow-hidden bg-panel relative">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <BadgeEl type={p.badge} />
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-semibold text-white/90 line-clamp-2 mb-3 group-hover:text-white transition-colors leading-snug">{p.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-secondary">{fmt(p.price)}</span>
                      <span className="block text-[11px] text-white/30 mt-0.5">ou 12x de {fmt(p.price / 12)}</span>
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
      </section>

      {/* ═══════════════ EDITORIAL / DESTAQUE DA SEMANA ═══════════════ */}
      <section className="py-20 bg-gradient-stage relative overflow-hidden">
        {/* Bokeh */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-90 group-hover:scale-95 transition-transform duration-700" />
              <img
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800"
                alt="Destaque da semana"
                className="relative rounded-3xl w-full shadow-card object-cover aspect-[4/3]"
              />
              <div className="absolute top-4 left-4">
                <span className="badge bg-secondary/90 text-deep"><Sparkles size={10} /> Destaque da Semana</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-secondary uppercase tracking-[0.25em] text-xs font-bold mb-4">Destaque da Semana</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-wide mb-6 leading-[1.1]">
                GUITARRA LES PAUL<br/><span className="text-gradient">STUDIO PREMIUM</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8 max-w-md">
                Corpo em mogno com tampo esculpido, captadores humbucker Burstbucker™ Pro 
                e acabamento Vintage Sunburst. Ideal para músicos que buscam timbre encorpado 
                e sustain infinito.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-3xl font-bold text-secondary">{fmt(3499)}</span>
                <span className="text-white/30 text-sm">ou 12x de {fmt(3499 / 12)}</span>
              </div>
              <Link to="/product/5" className="btn-primary inline-flex items-center gap-2">
                Ver Detalhes <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WAVE DIVIDER ═══════════════ */}
      <div className="section-wave" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1040 50%, #0a0e1a 100%)' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path fill="#0a0e1a" d="M0,30 C480,0 960,60 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ═══════════════ MAIS VENDIDOS ═══════════════ */}
      <section className="py-20 bg-deep">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary uppercase tracking-[0.25em] text-xs font-bold mb-3">Os favoritos do público</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">MAIS VENDIDOS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BESTSELLERS.map((p, i) => (
              <Link to={`/product/${p.id}`} key={p.id} className="card-product group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-panel relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {/* Rank number */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-deep/80 backdrop-blur-sm rounded-full flex items-center justify-center font-display text-2xl text-secondary border border-secondary/30">
                    {i + 1}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-white/90 mb-3 group-hover:text-white transition-colors">{p.name}</h3>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-secondary">{fmt(p.price)}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINAL ═══════════════ */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl tracking-wide mb-6">
            PRONTO PARA <span className="text-gradient">TOCAR</span>?
          </h2>
          <p className="text-white/40 max-w-lg mx-auto mb-10 text-lg">
            Explore milhares de instrumentos e acessórios com os melhores preços.
          </p>
          <Link to="/catalog" className="btn-primary text-lg inline-flex items-center gap-2">
            Explorar Catálogo <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
