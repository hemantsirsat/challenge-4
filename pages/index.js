import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Question from "../component/Question.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <img
          src="/illustration-box-desktop.svg"
          alt="box"
          className={styles.box}
        />
        <img
          src="/illustration-woman-online-mobile.svg"
          alt="mobile woman"
          className={styles.mobilewoman}
        />
        <div className={styles.imagesection}>
          <img
            src="/bg-pattern-mobile.svg"
            alt="mobile lines"
            className={styles.mobileline}
          />
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
          <div className={styles.faqheading}>
            <p>FAQ</p>
          </div>
          <Question
              question = "How many team members can I invite?"
              answer = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
          />
          <Question
              question = "What is the maximum file upload size?"
              answer = "No more than 2GB. All files in your account must fit your allotted storage space."
          />
          <Question
              question = "How do I reset my password?"
              answer = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
          />
          <Question
              question = "Can I cancel my subscription?"
              answer = "Yes! Send us a message and we’ll process your request no questions asked."
          />
          <Question
              question = "Do you provide additional support?"
              answer = "Chat and email support is available 24/7. Phone lines are open during normal business hours."
          />
        </div>
      </main>
    </div>
  )
}
