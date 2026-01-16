import { useState } from "react";
import Hero from "./components/Hero";
import Result from "./components/Result";
import ScoreBreakdown from "./components/ScoreBreakdown";
import Footer from "./components/Footer";

function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!repoUrl) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ repoUrl })
        }
      );

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze repository.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* MAIN CONTENT */}
      <div style={styles.page}>
        <div style={styles.container}>
          <Hero
            repoUrl={repoUrl}
            setRepoUrl={setRepoUrl}
            onAnalyze={analyze}
            loading={loading}
          />

          <Result result={result} />
          <ScoreBreakdown result={result} />
        </div>
      </div>

      {/* FOOTER FULL WIDTH */}
      <Footer />
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6f8",
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px 0"
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: "column",
    gap: "80px"
  }
};

export default App;
