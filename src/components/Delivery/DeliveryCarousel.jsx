import React from "react";
import Slider from "react-slick";

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DeliveryCarousel() {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
      title: "Kesari Bath",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/06a/af146087e76aed8c0baa90a84a6f206a.jpg",
      title: "Sagu",
    },
  ];

  const categories1 = [
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png",
      title: "McDonald's",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png",
      title: "Bikanervala",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
      title: "Pizza Hut",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807172.png",
      title: "Domino's Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/7d607a40589cca86b4db13542b82a319_1605092761.png",
      title: "Gopaldas Pethe Wale",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/5f5a748c79866ef0201f2c198831bedc_1630657348.png",
      title: "Kwality Wall's Frozen Dessert and Ice Cream Shop",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/3bd971b1a5783e208a9782c3604fa9f3_1601885754.png",
      title: "La Pino'z Pizza",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl mb-4 font-semibold">
        Inspitation for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-2 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>

      <h1 className="text-xl mb-4 font-semibold">
      Top brands for you
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories1.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories1.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>

    
  );
}

export default DeliveryCarousel;
