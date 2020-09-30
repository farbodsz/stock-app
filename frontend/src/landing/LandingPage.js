import React from "react";
import styles from "./LandingPage.module.scss";
import Header from "../common/Header";
import LandingSection from "./LandingSection";
import Footer from "../common/Footer";

export default function LandingPage() {
  const GITHUB_SHINTARO = "https://github.com/shintaroonuma/";
  const GITHUB_FARBOD = "https://github.com/farbodsz/";
  const LINKEDIN_SHINTARO = "https://www.linkedin.com/in/shintaro-onuma/";
  const LINKEDIN_FARBOD = "https://www.linkedin.com/in/farbodsz/";
  const SO_FARBOD = "https://stackoverflow.com/users/4230345/";

  return (
    <div>
      <Header />
      <LandingSection title="The Game" alt={false}>
        <p className={styles.p}>
          People invest in stocks to gain money.
          <br />
          So we thought, what are the best strategies to lose money on the stock
          exchange?
        </p>
        <p className={styles.p}>
          The stock trading game is a virtual stock trading platform where the
          goal is to lose the most amount of money. Each investor starts with an
          initial sum of one million dollars and can purchase stocks of their
          choosing from the NASDAQ Stock Exchange.
        </p>
        <p className={styles.p}>
          We think that by understanding how to lose money,
          <br />
          you’ll become (marginally) better at making money too.
        </p>
      </LandingSection>
      <LandingSection title="About Us" alt={true}>
        <h2>Shintaro Onuma</h2>
        <p className={styles.p}>
          3rd Year Computer Science, University of Southampton
        </p>
        <p className={styles.p}>
          I am interested in the intersection between finance and technology.
        </p>
        <p className={styles.links}>
          <a href={GITHUB_SHINTARO}>GitHub</a> |{" "}
          <a href={LINKEDIN_SHINTARO}>LinkedIn</a>
        </p>
        <h2>Farbod Salamat-Zadeh</h2>
        <p className={styles.p}>
          2nd Year Computer Science, University of Warwick.
        </p>
        <p className={styles.p}>
          My interests include algorithms, compilers, and projects that
          incorporate real-world data. For this reason, I’m enthusiastic to
          explore technologies related to Finance.
        </p>
        <p className={styles.links}>
          <a href={GITHUB_FARBOD}>GitHub</a> |{" "}
          <a href={LINKEDIN_FARBOD}>LinkedIn</a> |{" "}
          <a href={SO_FARBOD}>StackOverflow</a>
        </p>
      </LandingSection>
      <LandingSection title="Our Motivations" alt={false}>
        <p className={styles.p}>
          After developing mobile/desktop applications for the last few years we
          wanted to explore web technologies used by startups and large
          enterprises. We chose two popular web technologies to cover
          fundamental concepts used in full-stack projects: React and Django.
          These allowed us to construct the site and server within eight days.
          The potential to rapidly develop and scale ideas on the web is ideal
          for our future entrepreneurial ventures and personal projects.
        </p>
      </LandingSection>
      <Footer />
    </div>
  );
}
