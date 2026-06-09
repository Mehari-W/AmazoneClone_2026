import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import styles from "./ProductDetail.module.css";
import axios from "axios";
import LayOut from "../../components/LayOut/LayOut";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Products/ProductCard";
import Loader from "../../components/Loader/Loader";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true} />
      )}
    </LayOut>
  );
};

export default ProductDetail;
