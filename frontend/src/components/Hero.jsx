
import heroImage from "/hero.png";

export default function Hero({ repoUrl, setRepoUrl, onAnalyze, loading }) {
  return (
    <section style={styles.wrapper}>
      <div style={styles.left}>
        <h1 style={styles.title}>
          Analyze your GitHub seniority level
        </h1>

        <p style={styles.subtitle}>
          Get an instant, objective evaluation of your repository based on
          architecture, testing, infrastructure and documentation.
        </p>

        <div style={styles.form}>
          <input
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/user/repo"
            style={styles.input}
          />
          <button onClick={onAnalyze} disabled={loading} style={styles.button}>
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>
      </div>

      <div style={styles.right}>
        <img
          src={heroImage}
          alt="GitHub"
          style={styles.image}
        />
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "#fff",
    borderRadius: 16,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
  },
  left: {
    padding: "60px"
  },
  title: {
    fontSize: "42px",
    lineHeight: 1.1,
    marginBottom: 20
  },
  subtitle: {
    color: "#555",
    fontSize: 18,
    marginBottom: 32
  },
  form: {
    display: "flex",
    gap: 12
  },
  input: {
    flex: 1,
    padding: "14px 16px",
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 16
  },
  button: {
    background: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "14px 24px",
    borderRadius: 8,
    fontSize: 16,
    cursor: "pointer"
  },
  right: {
    background: "linear-gradient(135deg, #4b5563, #9ca3af)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "80%",
    maxWidth: 360
  }
};
