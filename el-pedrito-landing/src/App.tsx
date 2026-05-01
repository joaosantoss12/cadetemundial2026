const telegramLink = "https://t.me/+6g7u7D_IQ3hmMjVk";

const greens = [
  { img: "/green1.jpeg", odd: "6.40", profit: "+€540" },
  { img: "/green2.jpeg", odd: "2.50", profit: "+€150" },
  { img: "/green3.jpeg", odd: "2.00", profit: "+€100" },
  { img: "/green4.jpeg", odd: "2.60", profit: "+€80" },
];

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold: #F5C518;
          --gold-dim: #c49a0e;
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
        .glow-gold {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,197,24,0.18) 0%, transparent 70%);
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
          border: 1px solid rgba(245,197,24,0.35);
          border-radius: 100px;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          background: rgba(245,197,24,0.07);
          backdrop-filter: blur(8px);
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }
        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: pulse-dot 1.6s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        /* HERO HEADLINE */
        .hero-h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.2rem, 9vw, 7.5rem);
          line-height: 0.95;
          letter-spacing: 0.01em;
        }
        .hero-h1 .accent { color: var(--gold); position: relative; }
        .hero-h1 .stroke {
          -webkit-text-stroke: 2px var(--gold);
          color: transparent;
        }

        /* MARQUEE */
        .marquee-wrap { overflow: hidden; white-space: nowrap; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(245,197,24,0.05); }
        .marquee-track { display: inline-flex; animation: marquee 18s linear infinite; }
        .marquee-track span { padding: 0 2rem; font-family: 'Bebas Neue', sans-serif; font-size: 1rem; letter-spacing: 0.15em; color: var(--gold); opacity: 0.7; }
        .marquee-sep { color: rgba(245,197,24,0.3) !important; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

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
          color: var(--ink);
          background: var(--gold);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          box-shadow: 0 0 40px -8px rgba(245,197,24,0.5);
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.55s ease;
        }
        .cta-btn:hover { transform: scale(1.03); box-shadow: 0 0 60px -8px rgba(245,197,24,0.7); }
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
          color: var(--gold);
          background: transparent;
          border: 1.5px solid rgba(245,197,24,0.5);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cta-btn-outline:hover { background: rgba(245,197,24,0.08); border-color: var(--gold); }

        /* PROOF CARDS */
        .proof-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (min-width: 768px) { .proof-grid { grid-template-columns: repeat(4, 1fr); } }

        .proof-card {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          background: #0a1118;
          transition: transform 0.25s, border-color 0.25s;
        }
        .proof-card:hover { transform: translateY(-4px); border-color: rgba(0,200,83,0.4); }
        .proof-card img { display: block; width: 100%; aspect-ratio: 3/4; object-fit: cover; }

        .proof-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(10, 12, 11, 0.78);
          border: 1px solid rgba(0,200,83,0.5);
          border-radius: 4px;
          padding: 3px 9px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #00e676;
        }
        .proof-footer {
          padding: 12px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .proof-odd { font-family: 'DM Sans', sans-serif; font-size: 12px; color: var(--muted); }
        .proof-profit { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; color: #00e676; letter-spacing: 0.05em; }

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
          color: var(--gold);
          opacity: 0.75;
          margin-bottom: 16px;
        }
        .sec-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--gold); opacity: 0.5; }

        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        @media (max-width: 640px) {
          .hero-actions { flex-direction: column; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pitch-bg" style={{ position: "relative", overflow: "hidden", paddingBottom: "120px" }}>
        {/* Glow blobs */}
        <div className="glow-gold" style={{ width: 700, height: 700, top: -200, left: "50%", transform: "translateX(-50%)" }} />
        <div className="glow-green" style={{ width: 400, height: 400, bottom: -100, right: -80 }} />

        {/* Marquee ticker */}
        <div className="marquee-wrap" style={{ padding: "10px 0" }}>
          <div className="marquee-track">
            {Array(2).fill(null).map((_, i) => (
              <span key={i} style={{ display: "inline-flex", gap: 0 }}>
                <span>MUNDIAL 2026</span><span className="marquee-sep"> ✦ </span>
                <span>ANÁLISE DE VALOR</span><span className="marquee-sep"> ✦ </span>
                <span>GREENS CONFIRMADOS</span><span className="marquee-sep"> ✦ </span>
                <span>EL PEDRITO</span><span className="marquee-sep"> ✦ </span>
                <span>30.000€ META</span><span className="marquee-sep"> ✦ </span>
                <span>GRUPO GRATUITO</span><span className="marquee-sep"> ✦ </span>
                <span>USA · CANADÁ · MÉXICO</span><span className="marquee-sep"> ✦ </span>
              </span>
            ))}
          </div>
        </div>

        <div className="container" style={{ paddingTop: 100, paddingBottom: 40, position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60 }}>
            <div style={{ maxWidth: 780 }}>

              {/* Badge & Official Logos */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", marginBottom: 32 }}>
                <span className="badge"><span className="badge-dot" />Grupo Aberto · Mundial 2026</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img src="/mundial2026.png" alt="Mundial" style={{ height: "100px", objectFit: "contain", opacity: 0.85 }} />
                  <img src="/fifa.png" alt="FIFA" style={{ height: "100px", objectFit: "contain", opacity: 0.85 }} />
                </div>
              </div>

              {/* Headline */}
              <h1 className="hero-h1" style={{ marginBottom: 28 }}>
                <span style={{ color: "rgba(245,240,232,0.85)" }}>Vou faturar</span>{" "}
                <span className="accent">+30.000€</span>{" "}
                <span style={{ color: "rgba(245,240,232,0.85)" }}>neste</span>{" "}
                <span className="stroke">Mundial</span>
              </h1>

              {/* Sub */}
              <p className="dm" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--muted)", lineHeight: 1.7, marginBottom: 48, maxWidth: 560 }}>
                E vou mostrar cada aposta, passo a passo, dentro do meu grupo{" "}
                <strong style={{ color: "var(--white)", fontWeight: 500 }}>100% gratuito</strong>.{" "}
                Sem subscrições, sem tretas. Entra agora e acompanha tudo!
              </p>

              {/* Actions */}
              <div className="hero-actions" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="cta-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.062 13.9l-2.94-.924c-.638-.203-.65-.638.136-.943l11.49-4.43c.532-.194.997.13.815.645z"/></svg>
                  Entrar no Grupo Grátis
                </a>
                <span className="dm" style={{ fontSize: 13, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  +45.100 membros activos
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Pedrito — ghost image fused into hero background */}
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
            <img src="/pedrito.jpeg" alt="" aria-hidden="true" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              /* Increased Opacity and reduced greyscale so the image pops heavily */
              opacity: 0.45,
              filter: "grayscale(30%) contrast(1.15) brightness(0.9)",
              mixBlendMode: "luminosity",
            }} />
          </div>
        </div>
      </section>

      {/* ── PROOF ──────────────────────────────────── */}
      <section style={{ background: "var(--ink2)", padding: "80px 0 100px" }}>
        <div className="container">
          <p className="sec-label">Resultados reais</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 className="bebas" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1, color: "var(--white)" }}>
              Greens comprovados <span style={{ color: "var(--gold)" }}>recentes</span>
            </h2>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="cta-btn-outline" style={{ fontSize: "0.9rem", padding: "12px 24px" }}>
              Ver todos no Telegram →
            </a>
          </div>

          <div className="proof-grid">
            {greens.map((g, i) => (
              <div key={i} className="proof-card">
                <img src={g.img} alt={`Green ${i + 1}`} />
                <span className="proof-tag">✓ GREEN</span>
                <div className="proof-footer">
                  <span className="proof-odd">ODD {g.odd}</span>
                  <span className="proof-profit">{g.profit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────── */}
      <section style={{ background: "var(--pitch)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        {/* Pitch lines on green bg */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.08,
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }} />
        {/* Center circle */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400, height: 400,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <span className="badge" style={{ marginBottom: 28, display: "inline-flex" }}>⚽ Mundial USA · Canadá · México 2026</span>
          <h2 className="bebas" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95, marginBottom: 24, color: "var(--white)" }}>
            Não fiques de fora<br />
            <span style={{ color: "var(--gold)" }}>da maior conquista.</span>
          </h2>
          <p className="dm" style={{ fontSize: "1.1rem", color: "rgba(245,240,232,0.6)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Entra agora no grupo gratuito e acompanha cada aposta do Mundial 2026 ao meu lado.
          </p>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ fontSize: "1.5rem", padding: "20px 52px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.062 13.9l-2.94-.924c-.638-.203-.65-.638.136-.943l11.49-4.43c.532-.194.997.13.815.645z"/></svg>
            Entrar Agora — É Gratuito
          </a>
          <p className="dm" style={{ marginTop: 20, fontSize: 13, color: "rgba(187, 187, 187, 0.98)" }}>
            Sem cartão de crédito · Sem registo · Só resultados
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="footer">
        <p>© 2026 El Pedrito — Mundial 2026 Edition</p>
        <p className="disc">
          Apostar envolve risco. Este conteúdo tem fins informativos e de entretenimento. 
          Nunca apostes mais do que podes perder. +18. Joga responsavelmente.
        </p>
      </footer>
    </>
  );
}