import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLogo}>
        <img src={logo} className={styles.headerLogoImg} alt="logo" />
      </Link>
    </header>
  );
};
