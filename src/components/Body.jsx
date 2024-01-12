import React, { useEffect, useState } from "react";
import styles from "../css/components/Body.module.css";
import recognition from "../assets/icon-brand-recognition.svg";
import detail from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);
  const [shortenLinks, setShortenLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedUrl, setCopiedUrl] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const errorChecker = () => {
    if (!inputValue.includes("http://") && !inputValue.includes("https://")) {
      setError("Please add a protocol http:// or https:// to your URL");
      return true;
    }
    setError("");
    return false;
  };

  const fetchShortenUrl = async () => {
    if (!errorChecker()) {
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
        setError("");
      } catch (error) {
        setError(`An error has occured while shortening URL`);
      } finally {
        setLoading(false);
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length) {
      setError(`Please add a link`);
    } else {
      if (!errorChecker()) {
        setLinks([...links, inputValue]);
      }
      fetchShortenUrl();
    }
    setInputValue("");
  };

  const onCopyHandler = async (url, index) => {
    try {
      await navigator.clipboard.writeText(url);
      const text = await navigator.clipboard.readText();

      if (text === url) {
        setCopiedUrl(text);
        setCopiedIndex(index);
      } else {
        alert("URL was not copied! Check the console");
      }
    } catch (error) {
      console.error("Error while copying the URL:", error);
    }
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
            style={{ outline: error.length > 0 && `2px solid #f46262` }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={onSubmitHandler}>Shorten it!</button>
        </div>
        <p className={styles.errorMes}>{error.length > 0 && error}</p>
        {loading && <p className={styles.loader}>Shortening...</p>}
      </section>
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
    </main>
  );
};

export default Body;
