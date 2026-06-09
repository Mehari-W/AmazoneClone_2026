import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import styles from "./ProductDetail.module.css";
import axios from "axios";
import LayOut from "../../components/LayOut/LayOut";
import {productUrl} from '../../Api/endPoints'
import ProductCard from "../../components/Products/ProductCard";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
  .then((res) => {
  setProduct(res.data);
})
.catch((err) => {
  console.log(err);
});
  }, [productId]);
  return (
    <>
      <LayOut>
        <ProductCard product={product} />
      </LayOut>
    </>
  );
};

export default ProductDetail;
