import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-garamond",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ryan Bahadori",
  description: "A Student by day ☼ and a Full Stack Developer by night ☾",
  openGraph: {
    title: "Ryan Bahadori",
    description:
      "High school junior out of California. Developer, wrestler, photographer.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Bahadori",
    description:
      "High school junior out of California. Developer, wrestler, photographer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <head>
        <meta
          name="theme-color"
          content="#0f0f0f"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#f5f3ef"
          media="(prefers-color-scheme: light)"
        />
        <style>{`
          :root {
            --color-text: #0f0f0f;
            --color-bg: #f5f3ef;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --color-text: #f5f3ef;
              --color-bg: #0f0f0f;
            }
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            zoom: 80%;
          }

          body {
            font-family: var(--font-garamond), serif;
            background-color: var(--color-bg);
            color: var(--color-text);
            transition: background-color 0.2s, color 0.2s;
          }

          @keyframes float {
            0% {
              transform: translateX(0) translateY(0) rotate(0deg);
            }
            25% {
              transform: translateX(40px) translateY(-40px) rotate(90deg);
            }
            50% {
              transform: translateX(0) translateY(-80px) rotate(180deg);
            }
            75% {
              transform: translateX(-40px) translateY(-40px) rotate(270deg);
            }
            100% {
              transform: translateX(0) translateY(0) rotate(360deg);
            }
          }

          .floating-shape {
            animation: float 8s ease-in-out infinite;
          }

          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .reveal {
            animation: reveal 0.6s ease-out forwards;
          }

          .reveal-d1 { animation-delay: 0s; }
          .reveal-d2 { animation-delay: 0.1s; }

          .underline-link {
            text-decoration: underline;
            cursor: pointer;
            transition: opacity 0.2s;
          }

          .underline-link:hover {
            opacity: 0.7;
          }
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
