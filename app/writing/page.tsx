'use client'

import Link from 'next/link'
import { articles } from './articles'

export default function Writing() {
  return (
    <div style={{
      height: '100dvh',
      position: 'relative',
      overflow: 'hidden',
      paddingLeft: 'clamp(40px, 6vw, 80px)',
      paddingRight: 'clamp(40px, 6vw, 80px)',
      paddingTop: 'clamp(60px, 10vh, 120px)',
      paddingBottom: 'clamp(20px, 2vh, 40px)',
    }}>
      <div style={{
        maxWidth: '980px',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: 'clamp(22px, 1.8vw, 30px)',
          marginBottom: 'clamp(56px, 7vh, 84px)',
        }}>
          <Link href="/" style={{ textDecoration: 'underline', color: 'inherit' }}>
            Home
          </Link>
          <span style={{ opacity: 0.35 }}>Writing</span>
        </div>

        {articles.map((post, i) => (
          <div key={i} style={{ marginBottom: 'clamp(50px, 6.5vh, 82px)' }}>
            <Link
              href={`/writing/${post.slug}`}
              style={{
                color: 'inherit',
                fontSize: 'clamp(44px, 3.6vw, 62px)',
                lineHeight: 1.06,
                fontWeight: 300,
                textDecoration: 'underline',
                display: 'inline-block',
                marginBottom: '0.5rem',
              }}
            >
              {post.title}
            </Link>
            <p style={{ fontSize: 'clamp(17px, 1.15vw, 24px)', opacity: 0.62 }}>{post.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
