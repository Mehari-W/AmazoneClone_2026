import { img } from "./img/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../CarouselEffect/CarouselEffect.module.css'
const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((imgItems) => {
          return <img src={imgItems} />;
        })}
      </Carousel>
      <div className={styles.hero_img}></div>
    </>
  );
};

export default CarouselEffect;
