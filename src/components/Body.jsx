import styles from "../css/components/Body.module.css";
import Cta from "./Body sections/Cta";
import UrlShortening from "./Body sections/UrlShortening";
import Services from "./Body sections/Services";

const Body = () => {
  return (
    <main>
      <Cta />
      <UrlShortening />
      <Services />
      <section className={styles.ctaEnd}>
        <h2>Boost your links today</h2>
        <a href="#">Get Started</a>
      </section>
    </main>
  );
};

export default Body;
