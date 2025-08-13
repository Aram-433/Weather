import styles from "./app.module.css";
import Weather from "./components/Weather/Weather";
function App() {
  return (
    <div className={styles.app}>
      <Weather />
    </div>
  );
}

export default App;
