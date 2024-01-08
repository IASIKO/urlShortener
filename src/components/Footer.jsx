import React from "react";
import styles from "../css/components/Footer.module.css";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <img src={logo} alt="logo" />
        <ul aria-label="Features" className={styles.features}>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul aria-label="Resources" className={styles.resources}>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul aria-label="Company" className={styles.company}>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className={styles.socIcons}>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div className={styles.attribution}>
        <span>Coded by </span>
        <a target="blank" href="https://www.linkedin.com/in/giorgi-iaseshvili/">
          Giorgi Iaseshvili
        </a>
      </div>
    </div>
  );
};

export default Footer;
