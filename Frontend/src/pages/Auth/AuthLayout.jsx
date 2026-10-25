import './AuthLayout.css'

function BrandMark() {
  return (
    <svg className="auth-brand-mark" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M3 4.5C3 2.8 5.1 2 6.3 3.2L24.8 22c1.3 1.3.4 3.5-1.4 3.5h-4.2L3 9.3V4.5Z" fill="currentColor" />
      <path d="M3 13.2 13.6 24c1 1 2.8.3 2.8-1.1V18L3 4.8v8.4Z" fill="currentColor" opacity=".72" />
      <path d="M19 3.8h5.6c1 0 1.8.8 1.8 1.8v6.8c0 1.6-1.9 2.4-3 1.2L19 9V3.8Z" fill="currentColor" opacity=".9" />
    </svg>
  )
}

function AuthLayout({ children }) {
  return (
    <main className="auth-page">
      <section className="auth-promo" aria-label="About NEXORA">
        <a className="auth-brand auth-brand-light" href="/" aria-label="NEXORA home">
          <BrandMark />
          <span>NEXORA</span>
        </a>

        <div className="auth-promo-copy">
          <span className="auth-eyebrow"><span /> YOUR PEOPLE. YOUR MOMENTS.</span>
          <h1>Where your world<br />comes together.</h1>
          <p>Share what matters, find your people, and stay close to every moment.</p>
        </div>

        <div className="auth-social-preview" aria-hidden="true">
          <img className="auth-preview-main" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85" alt="" />
          <img className="auth-preview-float auth-preview-one" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80" alt="" />
          <img className="auth-preview-float auth-preview-two" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80" alt="" />
          <div className="auth-preview-note"><span className="auth-preview-heart">♥</span><span><strong>Good moments</strong><small>are better together</small></span></div>
        </div>

        <div className="auth-promo-bottom">
          <div className="auth-avatar-stack">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
            <span>+</span>
          </div>
          <p><strong>A little closer, every day.</strong><br />Join your community on NEXORA.</p>
        </div>
      </section>

      <section className="auth-panel">
        <a className="auth-brand auth-brand-mobile" href="/" aria-label="NEXORA home">
          <BrandMark />
          <span>NEXORA</span>
        </a>
        <div className="auth-content">{children}</div>
        <footer className="auth-footer">
          <span>© 2025 NEXORA</span>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#help">Help</a>
        </footer>
      </section>
    </main>
  )
}

export default AuthLayout
