import { getAllPosts, getPostBySlug } from '../../../lib/posts';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Digital Dental Hub`,
    description: post.description,
  };
}

// Simple and robust markdown to HTML helper for clean rendering
function renderMarkdown(md) {
  if (!md) return '';
  return md
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold my-4">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 style="font-size: 1.6rem; font-weight: 700; color: #fff; margin: 2rem 0 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 style="font-size: 1.25rem; font-weight: 600; color: #06b6d4; margin: 1.5rem 0 0.75rem 0;">$1</h3>')
    .replace(/^\- (.*$)/gim, '<li style="margin-bottom: 0.5rem; margin-left: 1.5rem; list-style-type: disc;">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li style="margin-bottom: 0.5rem; margin-left: 1.5rem; list-style-type: decimal;">$1</li>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong style="color: #fff;">$1</strong>')
    .replace(/\n\n/gim, '</p><p style="margin-bottom: 1.25rem;">');
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Post not found</h2>
        <a href="/" style={{ color: '#06b6d4' }}>← Back to articles</a>
      </div>
    );
  }

  return (
    <article className="container" style={{ maxWidth: '840px', padding: '3rem 1.5rem' }}>
      <a href="/" style={{ color: '#06b6d4', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '1.5rem' }}>
        ← Back to all articles
      </a>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {post.tags.map((tag) => (
          <span key={tag} className="badge">{tag}</span>
        ))}
      </div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '1rem' }}>
        {post.title}
      </h1>

      <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '2rem' }}>
        Published on {post.date} • Digital Dentistry AI Specialist
      </div>

      <div style={{ borderRadius: '16px', overflow: 'hidden', height: '380px', marginBottom: '2.5rem', border: '1px solid var(--border-color)' }}>
        <img
          src={post.coverImage}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Article Body */}
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: `<p style="margin-bottom: 1.25rem;">${renderMarkdown(post.content)}</p>` }}
      />

      {/* Software Call-to-Action Card */}
      <div className="cta-box">
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Need BlueSkyPlan, ArchForm, or CMF 7?
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          We provide full software setups, seamless installation, and 24/7 dedicated technical support at the lowest prices.
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
            padding: '10px 24px',
            borderRadius: '9999px',
            fontSize: '0.95rem'
          }}
        >
          Message @CADCAMSOFTWARES on Telegram
        </a>
      </div>
    </article>
  );
}
