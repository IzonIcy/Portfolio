import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '../articles'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  const body = article.rawContent ? article.rawContent.split('\n\nSources:\n')[0] : null
  const normalizedBody = body
    ? body
        .replace('\nThe true problem is self-monitoring', '\n\nThe true problem is self-monitoring')
        .replace('\nWhy "trying to have agency" doesn\'t succeed', '\n\nWhy "trying to have agency" doesn\'t succeed')
        .replace('\nWhat actually predicts improvement', '\n\nWhat actually predicts improvement')
        .replace(
          '\nA practical way to use agency without turning it into a new identity game',
          '\n\nA practical way to use agency without turning it into a new identity game'
        )
        .replace('\nThe uncomfortable part', '\n\nThe uncomfortable part')
    : null
  const headingBlocks = new Set([
    'The true problem is self-monitoring',
    'Why "trying to have agency" doesn\'t succeed',
    'What actually predicts improvement',
    'A practical way to use agency without turning it into a new identity game',
    'The uncomfortable part',
    'Stop doing this:',
    'Do more of this:',
    "We are wired to see agents that aren't there",
    'Watched people are nice people',
    'Punitive gods as social infrastructure',
    'religion is a social loop, not a private belief',
    'the god-shaped panopticon',
    'death is the real engine',
    'goodhart, campbell, and the classroom',
    'executive functioning is training for the proxy',
    'procrastination is a symptom of a working detector',
    'honest loss functions',
    'what to concede',
  ])

  const renderCitationLinks = (text: string) => {
    const parts = text.split(/(\[\d+\])/g)
    return parts.map((part, index) => {
      const match = part.match(/^\[(\d+)\]$/)

      if (!match || !article.references) {
        return part
      }

      const reference = article.references[Number(match[1]) - 1]
      if (!reference) {
        return part
      }

      return (
        <a
          key={`${part}-${index}`}
          href={reference.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          {part}
        </a>
      )
    })
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        paddingLeft: 'clamp(40px, 6vw, 80px)',
        paddingRight: 'clamp(40px, 6vw, 80px)',
        paddingTop: 'clamp(60px, 10vh, 120px)',
        paddingBottom: 'clamp(40px, 5vh, 80px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: 'clamp(24px, 2vw, 30px)',
          marginBottom: 'clamp(44px, 6vh, 70px)',
        }}
      >
        <Link href="/" style={{ textDecoration: 'underline', color: 'inherit' }}>
          Home
        </Link>
        <Link href="/writing" style={{ textDecoration: 'underline', color: 'inherit', opacity: 0.7 }}>
          Writing
        </Link>
      </div>

      <article style={{ maxWidth: '860px' }}>
        <h1
          style={{
            display: 'inline-block',
            backgroundColor: '#b9acd5',
            color: '#f2edf8',
            padding: '0.12em 0.18em',
            fontSize: 'clamp(48px, 4vw, 64px)',
            lineHeight: 1.05,
            fontWeight: 400,
            marginBottom: 'clamp(28px, 4vh, 44px)',
          }}
        >
          {article.title}
        </h1>

        {body ? (
          <>
            {normalizedBody.split('\n\n').map((block) => {
              const trimmedBlock = block.trim()
              const bulletLines = trimmedBlock
                .split('\n')
                .map((line) => line.trim())
                .filter(Boolean)

              if (headingBlocks.has(trimmedBlock)) {
                return (
                  <h2
                    key={trimmedBlock}
                    style={{
                      fontSize: 'clamp(40px, 2.6vw, 46px)',
                      lineHeight: 1.15,
                      fontWeight: 600,
                      marginTop: 'clamp(24px, 3vh, 38px)',
                      marginBottom: 'clamp(14px, 1.8vh, 20px)',
                    }}
                  >
                    {trimmedBlock}
                  </h2>
                )
              }

              if (bulletLines.length > 1 && !headingBlocks.has(trimmedBlock) && bulletLines.every((line) => !line.startsWith('['))) {
                return (
                  <ul key={trimmedBlock} style={{ listStyle: 'none', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    {bulletLines.map((line) => (
                      <li key={line} style={{ marginBottom: '0.4rem', fontSize: 'clamp(22px, 1.65vw, 30px)', lineHeight: 1.55 }}>
                        {line.replace(/^- /, '')}
                      </li>
                    ))}
                  </ul>
                )
              }

              if (bulletLines.every((line) => line.startsWith('[') || line.startsWith('    ['))) {
                return null
              }

              return (
                <p
                  key={trimmedBlock}
                  style={{
                    fontSize: 'clamp(22px, 1.65vw, 30px)',
                    lineHeight: 1.55,
                    opacity: 0.92,
                    marginBottom: 'clamp(20px, 2.5vh, 30px)',
                  }}
                >
                  {renderCitationLinks(trimmedBlock)}
                </p>
              )
            })}

            {article.references && article.references.length > 0 && (
              <div style={{ marginTop: 'clamp(28px, 4vh, 44px)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(40px, 2.6vw, 46px)',
                    lineHeight: 1.15,
                    fontWeight: 600,
                    marginBottom: 'clamp(14px, 1.8vh, 20px)',
                  }}
                >
                  Sources:
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {article.references.map((reference) => (
                    <li key={reference.href} style={{ marginBottom: '0.75rem', fontSize: 'clamp(22px, 1.65vw, 30px)', lineHeight: 1.5 }}>
                      <a
                        href={reference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
                      >
                        {reference.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          article.content.map((paragraph) => (
            <p
              key={paragraph}
              style={{
                fontSize: 'clamp(24px, 1.9vw, 30px)',
                lineHeight: 1.5,
                opacity: 0.92,
                marginBottom: '1.3rem',
              }}
            >
              {paragraph}
            </p>
          ))
        )}
      </article>
    </div>
  )
}
