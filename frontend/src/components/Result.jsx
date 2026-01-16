import React from "react";

/**
 * Map seniority level -> badge image
 * Coloque as imagens em: /public/badges/
 */
const LEVEL_BADGES = {
  "Junior-level": "/badges/junior.png",
  "mid-level": "/badges/engineer.png",
  "Senior-level": "/badges/senior.png"
};

/**
 * Format AI text into readable paragraphs
 */
function formatAiText(text) {
  if (!text) return null;

  return text
    .split(". ")
    .filter(Boolean)
    .map((sentence, index) => (
      <p key={index} style={{ marginBottom: 14 }}>
        {sentence.endsWith(".") ? sentence : sentence + "."}
      </p>
    ));
}

export default function Result({ result }) {
  const badgeSrc = result
    ? LEVEL_BADGES[result.level] || "/badges/placeholder.png"
    : "/badges/placeholder.png";

  return (
    <section style={styles.wrapper}>
      {/* LEFT — IMAGE / BADGE */}
      <div style={styles.left}>
        <img
          src={badgeSrc}
          alt="Seniority badge"
          style={styles.badge}
        />
      </div>

      {/* RIGHT — CONTENT */}
      <div style={styles.right}>
        {result ? (
          <>
            <h2 style={styles.level}>{result.level}</h2>

            {/* SCORE BAR */}
            <div style={styles.scoreBar}>
              <div
                style={{
                  ...styles.scoreFill,
                  width: `${result.score}%`
                }}
              />
            </div>

            <p style={styles.scoreText}>
              Score: {result.score} / 100
            </p>

            {/* AI SUMMARY */}
            <div style={styles.aiText}>
              {formatAiText(result.summary)}
            </div>
          </>
        ) : (
          <p style={styles.placeholder}>
            Paste a GitHub repository URL above to see the analysis result.
          </p>
        )}
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    background: "#ffffff",
    borderRadius: 16,
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // 🔑 IGUAL AO HERO
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    marginTop: -25
  },

  left: {
    background: "linear-gradient(135deg, #eef2ff, #e5e7eb)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 60
  },

  badge: {
    width: "70%",
    maxWidth: 260
  },

  right: {
    padding: 60,
    display: "flex",
    flexDirection: "column"
  },

  level: {
    fontSize: 32,
    marginBottom: 16
  },

  scoreBar: {
    height: 12,
    background: "#e5e7eb",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 10
  },

  scoreFill: {
    height: "100%",
    background: "#16a34a",
    transition: "width 0.6s ease"
  },

  scoreText: {
    fontWeight: 600,
    marginBottom: 28
  },

  aiText: {
    color: "#374151",
    lineHeight: 1.7,
    fontSize: 16
  },

  placeholder: {
    color: "#6b7280",
    fontStyle: "italic",
    fontSize: 16
  }
};
