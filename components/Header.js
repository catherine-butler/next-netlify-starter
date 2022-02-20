import styles from "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <header className={styles.header}>
        <img
          src="./styles/images/couple-shot.jpeg"
          alt="couple shot ben + emma"
          className={styles.top_image}
        />
      </header>
    </>
  );
}
