"use client";

import Link from "next/link";

export default function Home() {
  const copyEmail = () => {
    navigator.clipboard.writeText("ryanbahadori74@gmail.com");
  };

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: "clamp(40px, 6vw, 80px)",
        paddingRight: "clamp(40px, 6vw, 80px)",
        paddingTop: "clamp(60px, 10vh, 120px)",
        paddingBottom: "clamp(20px, 2vh, 40px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top Right Floating Shape */}
      <div
        className="floating-shape"
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          width: "140px",
          height: "140px",
          opacity: 0.65,
          zIndex: 5,
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="var(--color-text)" opacity="0.7">
            {/* Top peak */}
            <rect x="90" y="10" width="8" height="8" />
            <rect x="82" y="18" width="8" height="8" />
            <rect x="98" y="18" width="8" height="8" />

            {/* Upper region */}
            <rect x="75" y="26" width="8" height="8" />
            <rect x="90" y="26" width="8" height="8" />
            <rect x="105" y="26" width="8" height="8" />
            <rect x="68" y="34" width="8" height="8" />
            <rect x="82" y="34" width="8" height="8" />
            <rect x="98" y="34" width="8" height="8" />
            <rect x="112" y="34" width="8" height="8" />

            {/* Right side upper */}
            <rect x="115" y="42" width="8" height="8" />
            <rect x="123" y="50" width="8" height="8" />
            <rect x="130" y="58" width="8" height="8" />

            {/* Middle right cluster */}
            <rect x="120" y="70" width="8" height="8" />
            <rect x="128" y="78" width="8" height="8" />
            <rect x="135" y="90" width="8" height="8" />

            {/* Center region */}
            <rect x="85" y="50" width="8" height="8" />
            <rect x="75" y="58" width="8" height="8" />
            <rect x="90" y="62" width="8" height="8" />
            <rect x="105" y="58" width="8" height="8" />

            {/* Lower middle */}
            <rect x="70" y="75" width="8" height="8" />
            <rect x="82" y="80" width="8" height="8" />
            <rect x="95" y="85" width="8" height="8" />
            <rect x="108" y="80" width="8" height="8" />

            {/* Left side */}
            <rect x="60" y="90" width="8" height="8" />
            <rect x="75" y="100" width="8" height="8" />
            <rect x="55" y="110" width="8" height="8" />

            {/* Bottom cluster */}
            <rect x="75" y="115" width="8" height="8" />
            <rect x="90" y="120" width="8" height="8" />
            <rect x="105" y="115" width="8" height="8" />
            <rect x="65" y="130" width="8" height="8" />
            <rect x="85" y="135" width="8" height="8" />
          </g>
        </svg>
      </div>

      {/* Top Section - Bio and Links */}
      <div style={{ maxWidth: "650px", zIndex: 10, width: "100%" }}>
        <p
          style={{
            fontSize: "clamp(20px, 3vw, 30px)",
            lineHeight: 1.6,
            marginBottom: "1.2rem",
            fontFamily: "var(--font-garamond), serif",
            letterSpacing: "-0.005em",
          }}
        >
          <em style={{ fontStyle: "italic" }}>
            High school freshman out of California.
          </em>{" "}
          <em style={{ fontStyle: "italic" }}>
            Developer, Wrestler, and Photographer.
          </em>{" "}
          Currently at High School, And Making a Tech Company from the ground
          up.
        </p>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            fontSize: "clamp(13px, 2vw, 16px)",
            fontFamily: "var(--font-garamond), serif",
          }}
        >
          <Link
            href="/writing"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            Writing
          </Link>
          <Link
            href="/photos"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            Photos
          </Link>
          <a
            href="https://github.com/IzonIcy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            GitHub
          </a>
          <a
            href="https://x.com/EveryRya"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            X
          </a>
          <button
            type="button"
            onClick={copyEmail}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              border: "none",
              background: "none",
              color: "inherit",
              font: "inherit",
              fontFamily: "var(--font-garamond), serif",
            }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Bottom Section - Large Name */}
      <div
        style={{
          zIndex: 10,
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          marginBottom: "-50px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-garamond), serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            fontSize: "clamp(120px, 22vw, 400px)",
            color: "var(--color-text)",
            opacity: 0.5,
            display: "block",
          }}
        >
          Ryan B
        </span>
      </div>
    </div>
  );
}
