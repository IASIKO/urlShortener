import React from "react";
import styles from "../css/components/Body.module.css";

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
          <input type="text" placeholder="Shorten a link here..."/>
          <button>Shorten it!</button>
        </div>
        <p>Please add a link</p>
      </section>
    </main>
  );
};

export default Body;
