import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img
          src="/festivalFlags.svg"
          alt="Multicoloured festival flags"
          className={styles.flags}
        />
      </footer>
    </>
  );
}
