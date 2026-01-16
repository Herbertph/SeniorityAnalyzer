import Hero from "./components/Hero";
import Result from "./components/Result";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Hero />
        <Result />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6f8",
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px"
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
