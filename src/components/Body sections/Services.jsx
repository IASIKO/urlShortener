import React from "react";
import styles from "../../css/components/Body sections/Services.module.css";
import recognition from "../../assets/icon-brand-recognition.svg";
import detail from "../../assets/icon-detailed-records.svg";
import fully from "../../assets/icon-fully-customizable.svg";
import { useShortening } from "../../hooks/useShortening";

const Services = () => {
  const { links, shortenLinks, onCopyHandler, copiedIndex } = useShortening();

  return (
    <section className={styles.servicies}>
      <div className={styles.urlDisplay}>
        <ul>
          {shortenLinks.map((link, i) => (
            <li className={styles.urlList} key={i}>
              <span className={styles.currentUrl}>{links[i]}</span>
              <div className={styles.shortUrlBox}>
                <span className={styles.shortUrl}>{link}</span>
                <button
                  onClick={() => onCopyHandler(link, i)}
                  className={`${styles.copyButton} ${
                    copiedIndex === i && styles.copiedButton
                  }`}
                >
                  {copiedIndex === i ? "Copied!" : "Copy"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className={styles.boxTwo}>
          <div>
            <img src={detail} alt="detailed records" />
          </div>
          <p className={styles.oneTitle}>Detailed Records</p>
          <p className={styles.oneText}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
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
  );
};

export default Services;
