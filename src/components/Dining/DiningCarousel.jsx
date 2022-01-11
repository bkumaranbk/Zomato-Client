import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DiningCarousel() {
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
        "https://b.zmtcdn.com/data/pictures/2/5800522/b1b62baacfeefbfa65fb59b2fa8f0579_featured_v2.jpg",
      title: "Trending This Week",
      places: "15 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/9/5800229/8ca58d47bf934ca808a03a43b9f0d8e2_featured_v2.jpg",
      title: "Wah Taj!",
      places: "7 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/6/5801156/829e04a2c5f09e878a9bfe56fcebd3bb_featured_v2.jpg",
      title: "Best of Agra",
      places: "16 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/0/5800480/d9407b2b7f09d9dc8ee6130685fdea22_featured_v2.jpg",
      title: "All-Day Dining",
      places: "10 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/5800350/5c953367286bc25413550ee973a7eab5_featured_v2.jpg",
      title: "Must Visit Restaurants In Agra",
      places: "4 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/4/3401744/300438752d6c1f62a8495b005f392788_featured_v2.jpg",
      title: "Rooftops",
      places: "6 Places",
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

export default DiningCarousel;
