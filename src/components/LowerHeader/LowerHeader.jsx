import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./LowerHeader.module.css";

const LowerHeader = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.all}`}>
          <GiHamburgerMenu className={styles.icon} />
          <span>All</span>
        </li>
        <li className={styles.item}>
          <a href="#">Today's Deals</a>
        </li>
        <li className={styles.item}>
          <a href="#">Customer Service</a>
        </li>
        <li className={styles.item}>
          <a href="#">Registry</a>
        </li>
        <li className={styles.item}>
          <a href="#">Gift Cards</a>
        </li>
        <li className={styles.item}>
          <a href="#">Sell</a>
        </li>
      </ul>
    </nav>
  );
};

export default LowerHeader;