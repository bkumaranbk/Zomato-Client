import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function NightLifeCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [nightLife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/pictures/8/19314048/3d74edc78eccaa6748325a18d33f8349_featured_v2.jpg",
      title: "Best of Delhi NCR",
      places: "15 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/6/18888066/c38aefdac49cc278e3e8311b94ae52ce_featured_v2.jpg",
      title: "Molecule Air Bar",
      places: "3 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/2/18942402/2aed015ca5a4004be7d2c1e40de63379_featured_v2.jpg",
      title: "Folks Pub",
      places: "4 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/8/3400018/af63503d4e90cdf4f0a408c8a23c7eb5_featured_v2.jpg",
      title: "Pinch Of Spice",
      places: "6 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/18964755/9d479b11c9cf22ea3d998d007333b9b9_featured_v2.jpg",
      title: "Downtown Cafe",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/9/19359199/c9da60edee78d0005e959deb3decb915_featured_v2.jpg",
      title: "Unplugged Courtyard",
      places: "34 Places",
    },
  ]);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default NightLifeCarousel;
