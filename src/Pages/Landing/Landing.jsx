import CarouselEffect from "../../components/CarouselEffect/CarouselEffect";
import Category from "../../components/Category/Category";
import Product from "../../components/Products/Product";
import LayOut from "../../components/LayOut/LayOut";

const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
};

export default Landing;