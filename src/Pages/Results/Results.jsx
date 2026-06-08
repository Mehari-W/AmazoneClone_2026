import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { productUrl } from "../../Api/endPoints";
import LayOut from "../../components/LayOut/LayOut";
import ProductCard from "../../components/Products/ProductCard";
import styles from './Results.module.css'
const Results = () => {
  const [results, setResults ] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName,setResults]);
  return (
    <>
      <LayOut>
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          <div className={styles.products_container}>
            {results?.map((product) => {
            return  <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      </LayOut>
    </>
  );
};

export default Results;
