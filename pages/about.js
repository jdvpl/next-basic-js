import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jdvpl</title>
        <meta name="description" content="JDVPL, portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href="/">Home!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
