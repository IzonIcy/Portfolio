'use client'

import Link from 'next/link'

export default function Writing() {
  const posts = [
    { title: 'Coming Soon', date: '2026' },
  ]

  return (
    <div style={{
      minHeight: '100dvh',
      paddingLeft: 'clamp(40px, 6vw, 80px)',
      paddingRight: 'clamp(40px, 6vw, 80px)',
      paddingTop: 'clamp(60px, 10vh, 120px)',
      paddingBottom: 'clamp(40px, 5vh, 80px)',
    }}>
      <Link href="/" style={{ textDecoration: 'underline', color: 'inherit', marginBottom: '2rem', display: 'block', cursor: 'pointer' }}>
        ← Back
      </Link>
      
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontFamily: 'var(--font-garamond), serif',
        marginBottom: '2rem',
        fontWeight: 400,
      }}>
        Writing
      </h1>

      <div style={{ maxWidth: '700px' }}>
        {posts.map((post, i) => (
          <div key={i} style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-text)', opacity: 0.6 }}>
            <h2 style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontFamily: 'var(--font-garamond), serif',
              marginBottom: '0.5rem',
              fontWeight: 400,
            }}>
              {post.title}
            </h2>
            <p style={{ fontSize: '14px', opacity: 0.7 }}>{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
