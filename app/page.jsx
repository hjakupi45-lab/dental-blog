import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <div className="badge" style={{ marginBottom: '1rem' }}>
          Updated Daily • 100% Automated
        </div>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
          Mastering Modern <span style={{ background: 'linear-gradient(to right, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Dentistry</span>
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.15rem' }}>
          Daily expert guides on BlueSkyPlan implant guides, ArchForm direct 3D aligner workflows, and CMF 7 virtual surgical planning.
        </p>
      </div>

      {/* Featured Article */}
      {featured && (
        <a href={`/blog/${featured.slug}`} style={{ display: 'block', marginBottom: '4rem' }}>
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

      {/* Recent Posts Grid */}
      {recentPosts.length > 0 && (
        <>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem' }}>Recent Articles</h2>
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
        </>
      )}

      {/* Software Showcase Banner */}
      <div id="about" className="cta-box">
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Available CAD/CAM Software Solutions
        </h2>
        <p style={{ color: '#9ca3af', maxWidth: '650px', margin: '0 auto 1.5rem auto' }}>
          Get full installations and continuous 24/7 technical support for <strong>BlueSkyPlan</strong>, <strong>ArchForm</strong>, and <strong>CMF 7</strong> at the lowest prices on the market.
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
            padding: '12px 28px',
            borderRadius: '9999px',
            fontSize: '1rem'
          }}
        >
          Contact Support on Telegram (@CADCAMSOFTWARES)
        </a>
      </div>
    </div>
  );
}
