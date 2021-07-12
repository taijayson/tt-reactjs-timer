import styles from "./App.module.css";
import Counter from "../components/Counter/Counter";

// // TASK //

// let a = 5;
// let b = 7;
// // NEED a=7, b=5

// // 1 //
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // 2 //
// if ((a = 5)) {
//   a = 7;
//   b = 5;
//   console.log(a);
//   console.log(b);
// }

// // 3 //
// let tmp = a;
// a = b;
// b = tmp;
// console.log(a);
// console.log(b);

// // 4 //
////// works only with natural numbers from 2 to 32 ///////
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a);
// console.log(b);

export default function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.appHeader}>Counter</h1>
      <Counter />
    </div>
  );
}
