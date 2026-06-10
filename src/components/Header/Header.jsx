import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import LowerHeader from "../LowerHeader/LowerHeader";
import styles from "./Header.module.css";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [state] = useContext(DataContext);   
  // console.log(state.basket.length);                 

  return (
    <>
      <header className={styles.headerBackground}>
        <div className={styles.headerContainer}>
          {/* LEFT SIDE */}
          <div className={styles.leftSide}>
            <Link to="/" className={styles.logoLink}>
              <img
                className={styles.logoImage}
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </Link>
            <span className={styles.locationIcon}>
              <IoLocationOutline />
            </span>
            <div className={styles.deliveryText}>
              <p className={styles.deliveryTop}>Deliver to</p>
              <span className={styles.deliveryBottom}>Ethiopia</span>
            </div>
          </div>

          {/* SEARCH BAR */}
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

          {/* RIGHT SIDE */}
          <div className={styles.rightSide}>
            <img
              className={styles.flagImage}
              src="https://cdn-icons-png.flaticon.com/128/206/206626.png"
              alt="USA flag"
            />
            <select className={styles.languageSelect} name="language">
              <option value="en">EN</option>
            </select>

            <Link to="/auth" className={styles.navLink}>
              <p>Hello, Sign in</p>
              <span>Account & Lists</span>
            </Link>

            <Link to="/orders" className={styles.navLink}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={styles.navLink}>
              <BiCart />
              <span>{state.basket.length}</span>   
            </Link>
          </div>
        </div>
      </header>
      <LowerHeader />
    </>
  );
};

export default Header;