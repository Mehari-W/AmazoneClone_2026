import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";
import Loader from "../Loader/Loader";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.product_grid}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Product;
