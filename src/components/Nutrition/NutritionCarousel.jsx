import React from "react";
import Slider from "react-slick";

// components
import NutritionCarouselCard from "./NutritionCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function NutritionCarousel() {
  const categories = [
    {
      image:
        "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/0/AmazonStores/A21TJRUUN4KGV/4fdcaabd5545969580759caaa3f22a53.w6000.h1200._SL5000_CR0%2C0%2C5000%2C1000_SX1920_.png",
      title: "Protien & Fitness",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b484e636-3ed8-4960-a34e-e48a2bf9b0b9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      title: "Sleep & stress",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d022466a-797f-4b2c-b7ff-f193a42f5d8f.__CR0,0,3880,1200_PT0_SX970_V1___.jpg",
      title: "Digestion & Weight Loss",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/68be1d8b-630a-4f7b-adde-956c24f86872.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      title: "Omegas & CoQ10",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/938c4694-1d02-44ab-a231-5dcb87aeac9b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      title: "Beauty & Skin Care",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/7/AmazonStores/A21TJRUUN4KGV/62203a2e9b06bfa707ce93ca208d0b22.w6000.h1200._SL5000_CR0%2C0%2C5000%2C1000_SX1920_.png",
      title: "Immunity & Bones",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden flex gap-3 flex-wrap justify-evenly">
        {categories.map((food, index) => (
          <NutritionCarouselCard {...food} key={index} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food, index) => (
            <NutritionCarouselCard {...food} key={index} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default NutritionCarousel;
