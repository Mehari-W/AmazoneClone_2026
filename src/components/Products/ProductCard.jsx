import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ product, flex, renderDesc }) => {
  const { id, image, title, rating, price, description } = product;

  const dispatch = useContext(DataContext)[1];
  // console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, image, title, rating, price, description }
    });
  };

  return (
    <div
      className={`${styles.product_card} ${flex ? styles.product_flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && (
          <div style={{ maxWidth: "670px" }}>{description}</div>
        )}
        <div>
          <Rating
            name="half-rating"
            defaultValue={rating?.rate}
            precision={0.1}
          />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} className={styles.price} />
        </div>
        <button onClick={addToCart}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;