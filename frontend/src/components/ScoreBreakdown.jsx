import ScoreCard from "./ScoreCard";

export default function ScoreBreakdown({ result }) {
  if (!result) return null;

  const criteria = [
    {
      title: "Architecture",
      score: result.architectureScore,
      weight: "High impact",
      description:
        "Architecture reflects system design, separation of concerns, and long-term maintainability."
    },
    {
      title: "Testing",
      score: result.testingScore,
      weight: "Medium-high impact",
      description:
        "Automated tests improve reliability, prevent regressions, and signal engineering maturity."
    },
    {
      title: "Infrastructure",
      score: result.infrastructureScore,
      weight: "Medium impact",
      description:
        "Infrastructure shows readiness for deployment, CI/CD, and real-world operation."
    },
    {
      title: "Documentation",
      score: result.documentationScore,
      weight: "Supportive impact",
      description:
        "Documentation helps others understand, use, and contribute to the project."
    }
  ];

  return (
    <section style={styles.wrapper}>
      {criteria.map((item) => (
        <ScoreCard
          key={item.title}
          title={item.title}
          score={item.score}
          weight={item.weight}
          description={item.description}
        />
      ))}
    </section>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 40,
    marginBottom: 60
  }
};
