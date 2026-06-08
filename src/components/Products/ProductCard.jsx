import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from './Product.module.css';
import {Link} from "react-router-dom";
const ProductCard = ({product}) => {
  const { image, title, rating, price } = product ;
  return (
    <>
    <div className={styles.product_card}>
      <Link to='#'>
        <img src={image} alt={title} />
      </Link>
      
      <div>
        <h3>{title}</h3>

        <div>
          {/* rating */}
          <Rating name="half-rating" defaultValue={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>


          
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        <button>add to cart</button>
      </div>
      </div>
    </>
  );
};

export default ProductCard;
