import styles from "../css/components/Body.module.css";
import Cta from "./Body sections/Cta";
import UrlShortening from "./Body sections/UrlShortening";
import Services from "./Body sections/Services";
import CtaEnd from "./Body sections/CtaEnd";

const Body = () => {
  return (
    <main className={styles.main}>
      <Cta />
      <UrlShortening />
      <Services />
      <CtaEnd />
    </main>
  );
};

export default Body;
