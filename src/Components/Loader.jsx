import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div
        class={`${styles.button} inset-0 w-screen h-screen backdrop-blur-sm bg-black/45 flex items-center justify-center z-50`}
      >
        <div class={`${styles.ball} ${styles.ball1}`} />
        <div class={`${styles.ball} ${styles.ball2}`} />
        <div class={`${styles.ball} ${styles.ball3}`} />
        <div class={`${styles.ball} ${styles.ball4}`} />
      </div>
    </>
  );
}
