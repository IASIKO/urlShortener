import React from "react";
import styles from "../../css/components/Body sections/UrlShortening.module.css";

import { useShortening } from "../../hooks/useShortening";
import Services from "../Body sections/Services";

const UrlShortening = () => {
  const {
    inputValue,
    handleChange,
    onSubmitHandler,
    loading,
    error,
    links,
    shortenLinks,
    onCopyHandler,
    copiedIndex,
  } = useShortening();

  return (
    <>
      <section className={styles.urlShortening}>
        <div>
          <input
            type="text"
            placeholder="Shorten a link here..."
            style={{ outline: error.length > 0 && `2px solid #f46262` }}
            value={inputValue}
            onChange={handleChange}
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
        <Services />
      </section>
    </>
  );
};

export default UrlShortening;
