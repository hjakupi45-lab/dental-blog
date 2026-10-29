import { getAllPosts } from '../lib/posts';

const softwareCategories = [
  {
    category: 'Crown, Bridge & Restorative CAD',
    icon: '🦷',
    description: 'Industry-standard design tools for crowns, bridges, veneers, and full-arch restorations.',
    items: ['Exocad DentalCAD', '3Shape Dental System', 'InLab (Dentsply Sirona)', 'Dental Wings / DWOS', 'ChairsideCAD'],
  },
  {
    category: 'Implant Planning & Guided Surgery',
    icon: '🩺',
    description: 'Sub-millimeter CBCT alignment and surgical guide design for predictable placements.',
    items: ['Exoplan', '3Shape Implant Studio', 'BlueSkyPlan', 'RealGUIDE', 'CoDiagnostiX'],
  },
  {
    category: 'Orthodontics & Clear Aligners',
    icon: '📐',
    description: 'Direct aligner export, staging, virtual setup, and indirect bonding trays.',
    items: ['ArchForm', 'Maestro 3D', 'OnyxCeph', 'NemoCast', '3Shape Ortho Analyzer'],
  },
  {
    category: 'CAM, Milling & Production',
    icon: '⚙️',
    description: 'High-speed nesting, continuous calculation, and 5-axis toolpath optimization.',
    items: ['MillBox', 'HyperDent', 'Sum3D'],
  },
  {
    category: 'Maxillofacial, Surgery & Diagnostics',
    icon: '💀',
    description: 'Craniomaxillofacial planning, virtual osteotomy, cephalometrics, and 3D imaging.',
    items: ['CMF 7 (Materialise / Mimics)', 'Planmeca Romexis'],
  },
];

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
        <div className="badge" style={{ marginBottom: '1rem' }}>
          Updated Daily • 100% Automated Digital Dentistry
        </div>
        <h1 style={{ fontSize: '2.85rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
          Your Complete Hub for <span style={{ background: 'linear-gradient(to right, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CAD/CAM & Digital Dentistry</span>
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.15rem' }}>
          Daily expert workflows, setup guides, and unbeatable deals on the world’s leading dental design and manufacturing software.
        </p>
      </div>

      {/* Featured Article */}
      {featured && (
        <a href={`/blog/${featured.slug}`} style={{ display: 'block', marginBottom: '4.5rem' }}>
          <div className="card-hover" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ height: '320px', overflow: 'hidden' }}>
              <img
                src={featured.coverImage}
                alt={featured.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {featured.tags.map((tag) => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>
                {featured.title}
              </h2>
              <p style={{ color: '#9ca3af', marginBottom: '1.5rem', fontSize: '1rem' }}>
                {featured.description}
              </p>
              <div style={{ color: '#06b6d4', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Read Today's Article →
              </div>
            </div>
          </div>
        </a>
      )}

      {/* Complete Software Showcase Catalog */}
      <section id="software-catalog" style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge" style={{ marginBottom: '0.75rem' }}>Full Catalog Available</div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Available CAD/CAM Software Solutions</h2>
          <p style={{ color: '#9ca3af', maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
            Full installations, permanent activation, and 24/7 dedicated technical support at the lowest prices.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {softwareCategories.map((cat) => (
            <div key={cat.category} className="card-hover" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cat.icon}</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
                {cat.category}
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.25rem', flex: 1 }}>
                {cat.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                {cat.items.map((item) => (
                  <span key={item} style={{
                    fontSize: '0.78rem',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#e5e7eb'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
              <a
                href="https://t.me/CADCAMSOFTWARES"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textAlign: 'center',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: '#06b6d4',
                  padding: '10px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                Inquire on Telegram →
              </a>
            </div>
          ))}
        </div>

        {/* Global CTA Banner */}
        <div className="cta-box" style={{ marginTop: '2.5rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Need Any Other CAD/CAM or Dental Software?
          </h3>
          <p style={{ color: '#9ca3af', maxWidth: '650px', margin: '0 auto 1.5rem auto' }}>
            We carry all versions, complete modules, and library add-ons with fast remote installation and ongoing assistance.
          </p>
          <a
            href="https://t.me/CADCAMSOFTWARES"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              color: '#fff',
              fontWeight: 700,
              padding: '12px 30px',
              borderRadius: '9999px',
              fontSize: '1rem'
            }}
          >
            Contact @CADCAMSOFTWARES on Telegram
          </a>
        </div>
      </section>

      {/* Recent Posts Grid */}
      {recentPosts.length > 0 && (
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Recent Articles</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {recentPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                    {post.tags[0] || 'Dentistry'}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>
                    {post.description}
                  </p>
                  <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
