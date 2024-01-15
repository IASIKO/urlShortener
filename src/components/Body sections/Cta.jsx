import React from "react";
import styles from '../../css/components/Body sections/Cta.module.css'

const Cta = () => {
  return (
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
  );
};

export default Cta;
