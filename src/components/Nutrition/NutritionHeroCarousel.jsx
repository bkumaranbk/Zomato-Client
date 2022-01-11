import React, { useState } from "react";
import Slider from "react-slick";

//components
import NutritionHeroCarouselCard from "./NutritionHeroCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function NutritionHeroCarousel() {
  const [heroBanners, setHeroBanners] = useState([
    "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/0/AmazonStores/A21TJRUUN4KGV/4fdcaabd5545969580759caaa3f22a53.w6000.h1200._SL5000_CR0%2C0%2C5000%2C1000_SX1920_.png",
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b484e636-3ed8-4960-a34e-e48a2bf9b0b9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    "https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png",
    "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
    "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png",
  ]);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {heroBanners.map((image, index) => (
        <NutritionHeroCarouselCard image={image} key={index} />
      ))}
    </Slider>
  );
}

export default NutritionHeroCarousel;
