import React from "react";
import styles from "../css/components/Body.module.css";
import recognition from "../assets/icon-brand-recognition.svg";
import detail from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";
import Footer from "./Footer";

const Body = () => {
  return (
    <main className={styles.main}>
      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#">Get Started</a>
        </div>
      </section>
      <section className={styles.urlShortening}>
        <div>
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten it!</button>
        </div>
        <p>Please add a link</p>
      </section>
      <section className={styles.servicies}>
        <div className={styles.urlDisplay}></div>
        <div className={styles.serviceTitle}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={styles.serviceBoxes}>
          <div className={styles.boxOne}>
            <div>
              <img src={recognition} alt="brand recognition" />
            </div>
            <p className={styles.oneTitle}>Brand Recognition</p>
            <p className={styles.oneText}>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className={styles.boxTwo}>
            <div>
              <img src={detail} alt="detailed records" />
            </div>
            <p className={styles.oneTitle}>Detailed Records</p>
            <p className={styles.oneText}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className={styles.boxThree}>
            <div>
              <img src={fully} alt="fully customizable" />
            </div>
            <p className={styles.oneTitle}>Fully Customizable</p>
            <p className={styles.oneText}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.ctaEnd}>
        <h2>Boost your links today</h2>
        <a>Get Started</a>
      </section>
      <Footer />
    </main>
  );
};

export default Body;
