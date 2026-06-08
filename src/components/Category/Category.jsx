import { categoryInfo } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";

import styles from "./Category.module.css";
const Category = () => {
   return (
    <>
      <section className={styles.category__container}>
        {categoryInfo.map((infos, index) => {
          return <CategoryCard key={index} data={infos} />;
        })}
      </section>
    </>
  );
}

export default Category