import React from "react";
import Slider from "react-slick";
import "./Styles/ProductCarousel.css";

const products = [
  { id: 1, name: "Apple", image: "../../apple.jpg" },
  { id: 2, name: "Banana", image: "../../banana.jpg" },
  { id: 3, name: "Carrot", image: "../../carrot.jpg" },
  { id: 4, name: "Lettuce", image: "../../lettuce.jpg" },
  { id: 5, name: "Tomato", image: "../../tomato.jpg" },
  { id: 6, name: "Avocado", image: "../../avocado.webp" },
  { id: 7, name: "Persimmon", image: "../../persimmon.webp" },
  // Add more until you reach 30...
];

function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        Explore Our Fresh Produce For Spring Season
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <h3 className="product-name">{product.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
