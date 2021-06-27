import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imagesection}>
          <img
            src="/bg-pattern-desktop.svg"
            alt="lines"
            className={styles.lines}
          />
          <img
            src="/illustration-woman-online-desktop.svg"
            alt="online woman"
            className={styles.woman}
          />
        </div>
        <div className={styles.questionsection}>
        </div>
      </main>
    </div>
  )
}
