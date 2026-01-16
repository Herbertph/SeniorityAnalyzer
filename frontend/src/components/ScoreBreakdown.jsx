import ScoreCard from "./ScoreCard";

export default function ScoreBreakdown({ result }) {
  if (!result) return null;

  const criteria = [
    {
      title: "Architecture",
      score: result.architectureScore,
      max: 25,
      description:
        "We expect a clear separation of responsibilities, modular structure, and well-defined boundaries between layers."
    },
    {
      title: "Testing",
      score: result.testingScore,
      max: 25,
      description:
        "Projects should include automated tests covering core logic, with clear intent and maintainability."
    },
    {
      title: "Infrastructure",
      score: result.infrastructureScore,
      max: 25,
      description:
        "A mature project shows awareness of deployment, configuration, CI/CD, and environment separation."
    },
    {
      title: "Documentation",
      score: result.documentationScore,
      max: 25,
      description:
        "Good documentation explains purpose, setup, and usage clearly, helping others understand and contribute."
    }
  ];

  return (
    <section style={styles.wrapper}>
      {criteria.map((item) => (
        <ScoreCard
          key={item.title}
          title={item.title}
          score={item.score}
          maxScore={item.max}
          description={item.description}
        />
      ))}
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 40
  }
};
