import './globals.css';

export const metadata = {
  title: 'Digital Dental Insights | CAD/CAM, 3D Aligners & Guided Surgery',
  description: 'Your daily hub for advanced digital dentistry workflows, BlueSkyPlan guides, ArchForm 3D aligners, and CMF surgical planning.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header-glass">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#fff',
                fontSize: '1.2rem'
              }}>
                D
              </div>
              <span className="brand-font" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                Digital<span style={{ color: '#06b6d4' }}>Dental</span>Hub
              </span>
            </a>

            <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="/" style={{ color: '#9ca3af', fontSize: '0.95rem', fontWeight: 500 }}>Articles</a>
              <a href="#about" style={{ color: '#9ca3af', fontSize: '0.95rem', fontWeight: 500 }}>Software</a>
              <a href="https://t.me/CADCAMSOFTWARES" target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                color: '#fff',
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                Get Software
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: '5rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
          <div className="container">
            <p>© {new Date().getFullYear()} DigitalDentalHub. Automated daily digital dentistry & CAD/CAM insights.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
