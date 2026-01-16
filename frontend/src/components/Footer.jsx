// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          Built by <strong>Herbert Cunha</strong>
        </p>

        <div style={styles.links}>
          <a
            href="https://herbertph.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Portfolio
          </a>

          <span style={styles.separator}>•</span>

          <a
            href="https://www.linkedin.com/in/herbert-cunha/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ================= STYLES ================= */

const styles = {
  footer: {
    marginTop: 0,
    width: "100%",
    background: "linear-gradient(135deg, #020617, #020617)",
    color: "#e5e7eb",
    padding: "40px 20px",
    textAlign: "center"
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },

  text: {
    color: "#d1d5db",
    fontSize: 14
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: 10
  },

  link: {
    color: "#60a5fa",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500
  },

  separator: {
    color: "#6b7280"
  }
};
