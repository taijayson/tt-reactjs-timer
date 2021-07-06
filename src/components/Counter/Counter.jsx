import { useState, useCallback, useEffect } from "react";
import { interval, fromEvent, Subject } from "rxjs";
import { takeUntil, buffer, debounceTime, map, filter } from "rxjs/operators";
import styles from "./Counter.module.css";

export default function Counter() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const stop = new Subject();
    interval(1000)
      .pipe(takeUntil(stop))
      .subscribe(() => {
        if (status) {
          setTime((val) => val + 1000);
        }
      });
    return () => {
      stop.next();
      stop.complete();
    };
  }, [status]);

  const startStop = useCallback(() => {
    if (status) {
      setStatus(false);
      return setTime(0);
    }
    setStatus(true);
  }, [status]);

  const wait = useCallback(() => {
    const click = fromEvent(document, "click");
    click
      .pipe(
        buffer(click.pipe(debounceTime(300))),
        map((list) => list.length),
        filter((e) => e === 2)
      )
      .subscribe(() => setStatus(false));
  }, []);

  const reset = useCallback(() => {
    setStatus(true);
    setTime(0);
  }, []);

  return (
    <>
      <div className={styles.counter}>
        {new Date(time).toISOString().slice(11, 19)}
      </div>
      <div className={styles.buttonsWrap}>
        <button className={styles.buttonStartStop} onClick={startStop}>
          START/STOP
        </button>
        <div className={styles.buttonsWaitResWrap}>
          <button className={styles.buttonWait} onClick={wait}>
            WAIT
          </button>
          <button className={styles.buttonRes} onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
