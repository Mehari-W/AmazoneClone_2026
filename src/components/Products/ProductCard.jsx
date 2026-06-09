import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product, flex, renderDesc }) => {
  const { id, image, title, rating, price, description } = product;
  // console.log(product);
  return (
    <>
      <div
        className={`${styles.product_card} ${flex ? styles.product_flexed : ""}`}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>

        <div>
          <h3>{title}</h3>
          {renderDesc && (
            <div style={{ maxWidth: "670px" }}>{description} </div>
          )}
          <div>
            {/* rating */}
            <Rating
              name="half-rating"
              defaultValue={rating?.rate}
              precision={0.1}
            />
            {/* count */}
            <small>{rating?.count}</small>
          </div>
          <div>
            {/* price */}

            <CurrencyFormat amount={price} className={styles.price}/>
          </div>
          <button>add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
