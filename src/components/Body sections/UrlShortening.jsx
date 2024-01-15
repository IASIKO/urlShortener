import React from "react";
import styles from '../../css/components/Body sections/UrlShortening.module.css'
import { useShortening } from "../../hooks/useShortening";

const UrlShortening = () => {
  const { inputValue, handleChange, onSubmitHandler, loading, error } =
    useShortening();

  return (
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
  );
};

export default UrlShortening;
