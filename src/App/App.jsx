import styles from "./App.module.css";
import Counter from "../components/Counter/Counter";

export default function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.appHeader}>Counter</h1>
      <Counter />
    </div>
  );
}
