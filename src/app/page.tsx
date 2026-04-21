"use client";

import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  if (!email) return;
  setLoading(true);
  
  try {
    const res = await fetch("https://formspree.io/f/xqewyekq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, role }),
    });
    
    if (res.ok) {
      setSubmitted(true);
    }
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --forest: #1a2e1a;
          --forest-mid: #2d4a2d;
          --forest-light: #3d6b3d;
          --sand: #f5f0e8;
          --sand-warm: #ede5d4;
          --amber: #c8813a;
          --amber-light: #e09a52;
          --cream: #faf7f2;
          --text-dark: #1a1a16;
          --text-mid: #4a4a3e;
          --text-muted: #7a7a6e;
        }

        html, body { height: 100%; }

        .page {
          min-height: 100vh;
          background-color: var(--cream);
          font-family: 'DM Sans', sans-serif;
          color: var(--text-dark);
          position: relative;
          overflow: hidden;
        }

        /* Topographic SVG background */
        .topo-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          opacity: 0.06;
          pointer-events: none;
        }

        .topo-bg svg {
          width: 100%;
          height: 100%;
        }

        /* Grain texture overlay */
        .grain {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
        }

        .content {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Nav */
        .nav {
          padding: 28px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          animation: fadeDown 0.6s ease both;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-mark {
          width: 32px;
          height: 32px;
          background: var(--forest);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-mark svg {
          width: 18px;
          height: 18px;
          stroke: var(--sand);
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--forest);
          letter-spacing: -0.02em;
        }

        .nav-badge {
          font-size: 12px;
          font-weight: 500;
          color: var(--amber);
          border: 1px solid var(--amber);
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.04em;
        }

        /* Hero */
        .hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px 80px;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          width: 100%;
        }

        .eyebrow {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: var(--amber);
          margin-bottom: 24px;
          animation: fadeUp 0.7s 0.1s ease both;
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 600;
          line-height: 1.08;
          color: var(--forest);
          letter-spacing: -0.03em;
          margin-bottom: 12px;
          animation: fadeUp 0.7s 0.2s ease both;
        }

        .headline em {
          font-style: italic;
          color: var(--amber);
        }

        .subhead {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 400;
          font-style: italic;
          color: var(--text-mid);
          margin-bottom: 28px;
          line-height: 1.4;
          animation: fadeUp 0.7s 0.3s ease both;
        }

        .body-copy {
          font-size: 16px;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.75;
          max-width: 520px;
          margin: 0 auto 48px;
          animation: fadeUp 0.7s 0.4s ease both;
        }

        /* Personas */
        .personas {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 56px;
          animation: fadeUp 0.7s 0.45s ease both;
        }

        .persona-tag {
          background: var(--sand-warm);
          border: 1px solid rgba(26,46,26,0.12);
          border-radius: 24px;
          padding: 8px 16px;
          font-size: 13px;
          color: var(--text-mid);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .persona-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--amber);
          flex-shrink: 0;
        }

        /* Form */
        .form-wrap {
          width: 100%;
          max-width: 480px;
          animation: fadeUp 0.7s 0.5s ease both;
        }

        .form-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-mid);
          margin-bottom: 12px;
          display: block;
          text-align: left;
        }

        .role-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
        }

        .role-btn {
          padding: 10px 14px;
          border: 1px solid rgba(26,46,26,0.2);
          border-radius: 8px;
          background: white;
          font-size: 13px;
          color: var(--text-mid);
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'DM Sans', sans-serif;
          text-align: left;
        }

        .role-btn:hover {
          border-color: var(--forest-light);
          background: var(--sand);
        }

        .role-btn.selected {
          border-color: var(--forest);
          background: var(--forest);
          color: var(--sand);
        }

        .email-row {
          display: flex;
          gap: 8px;
        }

        .email-input {
          flex: 1;
          padding: 14px 18px;
          border: 1px solid rgba(26,46,26,0.2);
          border-radius: 10px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: var(--text-dark);
          background: white;
          outline: none;
          transition: border-color 0.15s;
        }

        .email-input:focus {
          border-color: var(--forest);
        }

        .email-input::placeholder {
          color: var(--text-muted);
        }

        .submit-btn {
          padding: 14px 24px;
          background: var(--forest);
          color: var(--sand);
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--forest-mid);
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-note {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 10px;
          text-align: center;
        }

        /* Success state */
        .success-wrap {
          background: var(--forest);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          color: var(--sand);
          animation: scaleIn 0.4s ease both;
        }

        .success-icon {
          width: 48px;
          height: 48px;
          background: rgba(245,240,232,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .success-icon svg {
          width: 24px;
          height: 24px;
          stroke: var(--amber-light);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .success-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--sand);
        }

        .success-body {
          font-size: 14px;
          color: rgba(245,240,232,0.7);
          line-height: 1.6;
        }

        /* Features strip */
        .features {
          background: var(--sand-warm);
          border-top: 1px solid rgba(26,46,26,0.08);
          padding: 48px 24px;
          animation: fadeUp 0.7s 0.6s ease both;
        }

        .features-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .features-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          text-align: center;
          margin-bottom: 32px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
        }

        .feature {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          background: var(--forest);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon svg {
          width: 18px;
          height: 18px;
          stroke: var(--sand);
          fill: none;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .feature-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--forest);
        }

        .feature-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          font-weight: 300;
        }

        /* Footer */
        .footer {
          padding: 24px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--sand-warm);
          border-top: 1px solid rgba(26,46,26,0.08);
        }

        .footer-text {
          font-size: 12px;
          color: var(--text-muted);
        }

        .footer-link {
          font-size: 12px;
          color: var(--amber);
          text-decoration: none;
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes topoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.005); }
        }

        .topo-bg svg {
          animation: topoFloat 18s ease-in-out infinite;
        }

        @media (max-width: 600px) {
          .nav { padding: 20px 24px; }
          .email-row { flex-direction: column; }
          .submit-btn { width: 100%; }
          .footer { flex-direction: column; gap: 8px; text-align: center; }
          .role-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="page">
        {/* Topographic background */}
        <div className="topo-bg">
          <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#1a2e1a" strokeWidth="1.5">
              <ellipse cx="600" cy="400" rx="80" ry="60" />
              <ellipse cx="600" cy="400" rx="160" ry="120" />
              <ellipse cx="600" cy="400" rx="240" ry="180" />
              <ellipse cx="600" cy="400" rx="320" ry="240" />
              <ellipse cx="600" cy="400" rx="400" ry="300" />
              <ellipse cx="600" cy="400" rx="480" ry="360" />
              <ellipse cx="600" cy="400" rx="560" ry="420" />
              <ellipse cx="600" cy="400" rx="640" ry="480" />
              <ellipse cx="600" cy="400" rx="720" ry="540" />
              <ellipse cx="200" cy="150" rx="60" ry="45" />
              <ellipse cx="200" cy="150" rx="120" ry="90" />
              <ellipse cx="200" cy="150" rx="180" ry="135" />
              <ellipse cx="200" cy="150" rx="240" ry="180" />
              <ellipse cx="1000" cy="650" rx="70" ry="50" />
              <ellipse cx="1000" cy="650" rx="140" ry="100" />
              <ellipse cx="1000" cy="650" rx="210" ry="150" />
              <ellipse cx="1000" cy="650" rx="280" ry="200" />
              <ellipse cx="900" cy="100" rx="50" ry="40" />
              <ellipse cx="900" cy="100" rx="100" ry="80" />
              <ellipse cx="900" cy="100" rx="150" ry="120" />
              <ellipse cx="150" cy="650" rx="55" ry="40" />
              <ellipse cx="150" cy="650" rx="110" ry="80" />
              <ellipse cx="150" cy="650" rx="165" ry="120" />
            </g>
          </svg>
        </div>

        <div className="grain" />

        <div className="content">
          {/* Nav */}
          <nav className="nav">
            <div className="logo">
              <div className="logo-mark">
                <svg viewBox="0 0 24 24">
                  <path d="M3 17l6-8 4 5 3-4 5 7" />
                  <circle cx="12" cy="5" r="2" />
                </svg>
              </div>
              <span className="logo-text">PlanQuick</span>
            </div>
            <span className="nav-badge">Coming soon</span>
          </nav>

          {/* Hero */}
          <main className="hero">
            <p className="eyebrow">For guides, organizers &amp; outdoor enthusiasts</p>

            <h1 className="headline">
              You lead.<br />
              <em>We handle the rest.</em>
            </h1>

            <p className="subhead">
              The trip platform for people who do what they love
            </p>

            <p className="body-copy">
              Booking pages, deposit collection, gear lists, waivers, pre-trip communications — all automated. Whether you&apos;re organizing your first group trip or running guided adventures every weekend, PlanQuick gives you the Backroads experience without the Backroads overhead.
            </p>

            {/* Persona tags */}
            <div className="personas">
              {[
                "Just got back from somewhere amazing",
                "Guides friends on weekends",
                "Wants to monetize local knowledge",
                "Organizes the group trip every year",
                "Ready to go pro",
              ].map((p) => (
                <div key={p} className="persona-tag">
                  <div className="persona-dot" />
                  {p}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="form-wrap">
              {submitted ? (
                <div className="success-wrap">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="success-title">You&apos;re on the trail.</p>
                  <p className="success-body">
                    We&apos;ll reach out personally before we launch. Early access members shape the product — your feedback matters.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <span className="form-label">What best describes you?</span>
                  <div className="role-grid">
                    {[
                      { id: "organizer", label: "Trip organizer" },
                      { id: "guide", label: "Aspiring guide" },
                      { id: "expert", label: "Local expert" },
                      { id: "pro", label: "Professional guide" },
                    ].map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        className={`role-btn${role === r.id ? " selected" : ""}`}
                        onClick={() => setRole(r.id)}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>

                  <div className="email-row">
                    <input
                      type="email"
                      className="email-input"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={loading || !email}
                    >
                      {loading ? "Joining…" : "Get early access"}
                    </button>
                  </div>
                  <p className="form-note">
                    Free to join. No spam. Early members get free Pro access at launch.
                  </p>
                </form>
              )}
            </div>
          </main>

          {/* Features strip */}
          <div className="features">
            <div className="features-inner">
              <p className="features-label">Everything a solo guide or trip organizer needs</p>
              <div className="features-grid">
                <div className="feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <p className="feature-title">Beautiful booking pages</p>
                  <p className="feature-desc">Professional trip pages live in minutes. Share a link — participants book and pay their deposit instantly.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <p className="feature-title">Activity-smart templates</p>
                  <p className="feature-desc">Hiking, fishing, kayaking, birding — each activity gets tailored gear lists, intake questions, and waiver language.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <p className="feature-title">Automated client journey</p>
                  <p className="feature-desc">Confirmations, gear reminders, final details, weather alerts — all sent automatically. You focus on the trip.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <p className="feature-title">Waivers and compliance</p>
                  <p className="feature-desc">Activity-specific liability waivers delivered and signed digitally. Built-in permit and compliance reminders by state.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            <p className="footer-text">© 2026 PlanQuick · planquick.app</p>
            <a href="mailto:hello@planquick.app" className="footer-link">hello@planquick.app</a>
          </footer>
        </div>
      </div>
    </>
  );
}
