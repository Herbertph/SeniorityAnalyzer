export default function ScoreCard({ title, score, maxScore, description }) {
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>

      {/* SCORE BAR */}
      <div style={styles.scoreBar}>
        <div
          style={{
            ...styles.scoreFill,
            width: `${percentage}%`
          }}
        />
      </div>

      <p style={styles.scoreText}>
        {score} / {maxScore}
      </p>

      <p style={styles.description}>{description}</p>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  card: {
    background: "#ffffff",
    borderRadius: 16,
    padding: 32,
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column"
  },

  title: {
    fontSize: 22,
    marginBottom: 16
  },

  scoreBar: {
    height: 10,
    background: "#e5e7eb",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 8
  },

  scoreFill: {
    height: "100%",
    background: "#16a34a",
    transition: "width 0.6s ease"
  },

  scoreText: {
    fontWeight: 600,
    marginBottom: 16
  },

  description: {
    color: "#374151",
    lineHeight: 1.6,
    fontSize: 15
  }
};
