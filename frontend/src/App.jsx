import { useState } from "react";

function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function analyze() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(
        "https://seniorityanalyzer-production.up.railway.app/analyze",
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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>GitHub Seniority Analyzer</h1>

      <input
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        placeholder="https://github.com/user/repo"
        style={{ width: 400 }}
      />

      <button onClick={analyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h2>{result.level}</h2>
          <p>Score: {result.score}</p>
          <p>{result.summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
