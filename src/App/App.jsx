import styles from "./App.module.css";
import Counter from "../components/Counter/Counter";

// let a = 5;
// let b = 7;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
// if ((a = 5)) {
//   a = 7;
//   b = 5;
//   console.log(a);
//   console.log(b);
// }

export default function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.appHeader}>Counter</h1>
      <Counter />
    </div>
  );
}
