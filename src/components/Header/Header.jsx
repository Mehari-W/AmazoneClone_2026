import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "../LowerHeader/LowerHeader";

const Header = () => {

  return (
    <>
      {" "}
      <section className={styles.headerBackground}>
        <div className={styles.headerContainer}>
          {/* ── LEFT SIDE ── */}
          <div className={styles.leftSide}>
            {/* Logo */}
            <a href="#" className={styles.logoLink}>
              <img
                className={styles.logoImage}
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </a>

            {/* Delivery location */}
            <span className={styles.locationIcon}>
              <IoLocationOutline />
            </span>
            <div className={styles.deliveryText}>
              <p className={styles.deliveryTop}>Deliver to</p>
              <span className={styles.deliveryBottom}>Ethiopia</span>
            </div>
          </div>

          {/* ── SEARCH BAR ── */}
          <div className={styles.searchSide}>
            <select className={styles.searchSelect} name="category">
              <option value="all">All</option>
            </select>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Amazon"
            />
            <button className={styles.searchIcon} aria-label="Search">
              <FaSearch />
            </button>
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className={styles.rightSide}>
            {/* Language */}
            <img
              className={styles.flagImage}
              src="https://cdn-icons-png.flaticon.com/128/206/206626.png"
              alt="USA flag"
            />
            <select className={styles.languageSelect} name="language">
              <option value="en">EN</option>
            </select>

            {/* Account & Lists */}
            <a href="#" className={styles.navLink}>
              <p>Hello, Sign in</p>
              <span>Account & Lists</span>
            </a>

            {/* Returns & Orders */}
            <a href="#" className={styles.navLink}>
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            {/* Cart */}
            <a href="#" className={styles.navLink}>
              <BiCart />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
