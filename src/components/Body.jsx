import styles from "../css/components/Body.module.css";
import Cta from "./Body sections/Cta";
import UrlShortening from "./Body sections/UrlShortening";
import CtaEnd from "./Body sections/CtaEnd";

const Body = () => {
  return (
    <main className={styles.main}>
      <Cta />
      <UrlShortening />
      <CtaEnd />
    </main>
  );
};

export default Body;
