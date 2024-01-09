import React, { useState } from "react";
import styles from "../css/components/Body.module.css";
import recognition from "../assets/icon-brand-recognition.svg";
import detail from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";
import Footer from "./Footer";

const Body = () => {
  const [isLink, setIsLink] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);
  const [shortenLinks, setShortenLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchShortenUrl = async () => {
    try {
      setLoading(true);
      const url = "https://spectacular-babka-fa1a16.netlify.app/shorten-url";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputValue.trim() }),
      });

      const result = await response.json();

      setShortenLinks([...shortenLinks, result.shortUrl]);
      setLoading(false);
    } catch (error) {}
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length) {
      setIsLink(true);
    } else {
      setIsLink(false);
      setLinks([...links, inputValue]);
      fetchShortenUrl();
    }
    setInputValue("");
  };

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
          <input
            type="text"
            placeholder="Shorten a link here..."
            style={{ outline: isLink && `2px solid #f46262` }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={onSubmitHandler}>Shorten it!</button>
        </div>
        {isLink && <p className={styles.emptyMes}>Please add a link</p>}
        {loading && <p className={styles.loader}>Shortening...</p>}
      </section>
      <section className={styles.servicies}>
        <div className={styles.urlDisplay}>
          <ul>
            {links.map((link, i) => (
              <li className={styles.urlList} key={i}>
                <span className={styles.currentUrl}>{link}</span>
                <div className={styles.shortUrlBox}>
                  <span className={styles.shortUrl}>{shortenLinks[i]}</span>
                  <button>Copy</button>
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
        <a href="#">Get Started</a>
      </section>
      <Footer />
    </main>
  );
};

export default Body;
