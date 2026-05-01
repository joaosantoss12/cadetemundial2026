import { useState } from 'react';

const telegramLink = "https://t.me/+Iq_Mb8qjA1UyZjhh";

const stats = [
  { label: "APOSTAS", value: "183", color: "#3b82f6" },
  { label: "LUCROS", value: "15.321€", color: "#00e676" },
  { label: "ROI", value: "78.42%", color: "#00e676" },
  { label: "PROGRESSÃO", value: "126.83%", color: "#00e676" }
];

const feedbacks = [
  "/feedback1.jpeg",
  "/feedback2.jpeg",
  "/feedback3.jpeg",
  "/feedback4.jpeg",
  "/feedback5.jpeg",
  "/feedback6.jpeg"
];

export default function App() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;1,9..40,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --accent: #3b82f6;      /* Blue */
          --accent-dim: #2563eb;
          --green: #00C853;
          --pitch: #1a3a1a;
          --ink: #070c12;
          --ink2: #0d1521;
          --white: #f5f0e8;
          --muted: #8a96a8;
        }
        body { background: var(--ink); color: var(--white); overflow-x: hidden; }
        .bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .dm { font-family: 'DM Sans', sans-serif; }
        
        /* PITCH LINES BACKGROUND */
        .pitch-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        
        /* GLOW BLOB */
        .glow-accent {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(1px);
        }
        .glow-green {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(1px);
        }
        
        /* HERO BADGE */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border: 1px solid rgba(59, 130, 246, 0.35);
          border-radius: 100px;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          background: rgba(59, 130, 246, 0.07);
          backdrop-filter: blur(8px);
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }
        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
          animation: pulse-dot 1.6s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        
        /* HERO HEADLINE */
        .hero-h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7.5vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.01em;
        }
        .hero-h1 .accent { color: var(--accent); position: relative; }
        .hero-h1 .stroke {
          -webkit-text-stroke: 2px var(--accent);
          color: transparent;
        }
        
        /* CTA BUTTON */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 40px;
          border-radius: 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.12em;
          color: white;
          background: var(--accent);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          text-decoration: none;
          box-shadow: 0 0 40px -8px rgba(59, 130, 246, 0.5);
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.55s ease;
        }
        .cta-btn:hover { 
          transform: scale(1.03); 
          background: var(--accent-dim);
          box-shadow: 0 0 60px -8px rgba(59, 130, 246, 0.7); 
        }
        .cta-btn:hover::before { transform: translateX(100%); }
        
        /* SECONDARY BTN */
        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 17px 36px;
          border-radius: 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.25rem;
          letter-spacing: 0.12em;
          color: var(--accent);
          background: transparent;
          border: 1.5px solid rgba(59, 130, 246, 0.5);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cta-btn-outline:hover { background: rgba(59, 130, 246, 0.08); border-color: var(--accent); }
        
        /* STATS CARDS */
        .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
        .stat-card {
          background: #0a1118;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 32px 16px;
          text-align: center;
          transition: transform 0.25s, border-color 0.25s;
        }
        .stat-card:hover { transform: translateY(-4px); border-color: rgba(59, 130, 246, 0.4); }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: var(--muted);
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          text-transform: uppercase;
          font-weight: 500;
        }
        .stat-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          margin: 0;
          line-height: 1;
        }

        /* FEEDBACKS MASONRY */
        .masonry {
          column-count: 2;
          column-gap: 16px;
        }
        @media (min-width: 768px) {
          .masonry { column-count: 3; }
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 16px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.2s, border-color 0.2s;
        }
        .masonry-item:hover {
          transform: scale(1.02);
          border-color: rgba(59, 130, 246, 0.4);
        }
        .masonry-item img {
          width: 100%;
          display: block;
        }

        /* LIGHTBOX */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          cursor: pointer;
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .lightbox img {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 8px;
          box-shadow: 0 0 40px rgba(0,0,0,0.5);
          cursor: default;
          transform: scale(1);
          transition: transform 0.3s;
        }
        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 2.5rem;
          background: none;
          border: none;
          cursor: pointer;
          line-height: 1;
          padding: 0 10px;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .lightbox-close:hover { opacity: 1; }

        /* FOOTER */
        .footer { text-align: center; padding: 40px 24px; border-top: 1px solid rgba(255,255,255,0.06); }
        .footer p { font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.2); }
        .footer .disc { font-size: 11px; color: rgba(255,255,255,0.1); margin-top: 10px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6; }
        
        /* SECTION LABEL */
        .sec-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0.75;
          margin-bottom: 16px;
        }
        .sec-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--accent); opacity: 0.5; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        @media (max-width: 640px) {
          .hero-actions { flex-direction: column; }
          .cta-btn { width: 100%; }
        }
      `}</style>

      {/*   HERO   */}
      <section className="pitch-bg" style={{ position: "relative", overflow: "hidden", paddingBottom: "120px" }}>
        {/* Glow blobs */}
        <div className="glow-accent" style={{ width: 700, height: 700, top: -200, left: "50%", transform: "translateX(-50%)" }} />
        <div className="glow-green" style={{ width: 400, height: 400, bottom: -100, right: -80 }} />

        <div className="container" style={{ paddingTop: 60, paddingBottom: 40, position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60 }}>
            <div style={{ maxWidth: 780 }}>
              {/* Badge & Official Logos */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", marginBottom: 32 }}>
                <span className="badge"><span className="badge-dot" />Grupo Aberto — Mundial 2026</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img src="/mundial2026.png" alt="Mundial" style={{ height: "100px", objectFit: "contain", opacity: 0.85 }} />
                  <img src="/fifa.png" alt="FIFA" style={{ height: "100px", objectFit: "contain", opacity: 0.85 }} />
                </div>
              </div>

              {/* Headline */}
              <h1 className="hero-h1" style={{ marginBottom: 20 }}>
                <span className="stroke">Todos os dias</span>{" "}
                <span style={{ color: "rgba(245,240,232,0.85)" }}>vou transformar</span>{" "}
                <span className="accent">20€ em 1000€</span>{" "}
                <span style={{ color: "rgba(245,240,232,0.85)" }}>com estratégia</span>
              </h1>

              {/* Sub */}
              <div className="dm" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)", color: "var(--white)", lineHeight: 1.7, marginBottom: 48, maxWidth: 560 }}>
                <p style={{ marginBottom: '12px' }}>👉 Tudo passo a passo dentro do meu grupo gratuito</p>
                <p>Participa agora na próxima alavancagem 👇🏼</p>
              </div>

              {/* Actions */}
              <div className="hero-actions" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="cta-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.062 13.9l-2.94-.924c-.638-.203-.65-.638.136-.943l11.49-4.43c.532-.194.997.13.815.645z"/></svg>
                  Entrar no Grupo Grátis
                </a>
                <span className="dm" style={{ fontSize: 13, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  +12.100 membros ativos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cadete ghost image fused into hero background */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "clamp(320px, 55vw, 820px)",
          pointerEvents: "none",
          zIndex: 0,
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 45%)",
        }}>
          <div style={{
            width: "100%",
            height: "100%",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
          }}>
            <img src="/cadete.jpeg" alt="" aria-hidden="true" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              opacity: 0.45,
              filter: "grayscale(30%) contrast(1.15) brightness(0.9)",
              mixBlendMode: "luminosity",
            }} />
          </div>
        </div>
      </section>

      {/*   STATS   */}
      <section style={{ background: "var(--ink2)", padding: "80px 0" }}>
        <div className="container">
          <p className="sec-label">Transparência Total</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 className="bebas" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1, color: "var(--white)" }}>
              As minhas <span style={{ color: "var(--accent)" }}>Estatísticas</span>
            </h2>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="cta-btn-outline" style={{ fontSize: "0.9rem", padding: "12px 24px" }}>
              Entrar sem esquemas
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-val" style={{ color: stat.color }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*   FEEDBACKS MASONRY   */}
      <section style={{ background: "var(--ink)", padding: "80px 0 100px" }}>
        <div className="container">
          <p className="sec-label">A voz da comunidade</p>
          <div style={{ marginBottom: 40 }}>
            <h2 className="bebas" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1, color: "var(--white)" }}>
              Feedback dos <span style={{ color: "var(--accent)" }}>Membros</span>
            </h2>
          </div>

          <div className="masonry">
            {feedbacks.map((img, i) => (
              <div key={i} className="masonry-item" onClick={() => setSelectedImg(img)}>
                <img src={img} alt={`Feedback ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*   LIGHTBOX MODAL   */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImg(null)}>&times;</button>
          <img 
            src={selectedImg} 
            alt="Feedback Expandido" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/*   FOOTER   */}
      <footer className="footer">
        <p>© 2026 Cadete - Mundial 2026 Edition</p>
        <p className="disc">
          Apostar envolve risco. Este conteúdo tem fins informativos e de entretenimento. 
          Nunca apostes mais do que podes perder. +18. Joga responsavelmente.
        </p>
      </footer>
    </>
  );
}