'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Photos() {
  const columns = [
    [
      { src: '/IMG_1468.jpg', alt: 'Redwood trees', ratio: '3 / 5' },
      { src: '/IMG_1478.jpg', alt: 'Fountain water', ratio: '4 / 3' },
    ],
    [
      { src: '/IMG_1466.jpg', alt: 'Evergreen branches', ratio: '4 / 3' },
      { src: '/IMG_1460.jpg', alt: 'Orange tree', ratio: '4 / 3' },
      { src: '/IMG_1476.jpg', alt: 'Red berries', ratio: '4 / 3' },
    ],
    [
      { src: '/IMG_1594.jpg', alt: 'White flower', ratio: '3 / 4' },
      { src: '/IMG_1474.jpg', alt: 'Sun through leaves', ratio: '4 / 3' },
    ],
  ]

  return (
    <div style={{
      minHeight: '100dvh',
      padding: 'clamp(10px, 1.4vw, 18px)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2px',
      }}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} style={{ display: 'grid', gap: '2px' }}>
            {column.map((photo) => (
              <div
                key={photo.src}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: photo.ratio,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        position: 'fixed',
        left: 'clamp(12px, 1.4vw, 20px)',
        top: 'clamp(12px, 1.4vw, 20px)',
        zIndex: 10,
        mixBlendMode: 'difference',
      }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
          ←
        </Link>
      </div>
    </div>
  )
}
