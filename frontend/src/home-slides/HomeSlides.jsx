import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./HomeSlides.css";

import image1 from "../assets/home-slideshow/image1.jpg";
import image2 from "../assets/home-slideshow/image2.jpg";
import image3 from "../assets/home-slideshow/image3.jpg";

const slides = [
  {
    id: 1,
    image: image1,
    header: "Quick N Fresher than Ever",
    paragraph:
      "Order your favorite food and get it delivered to your doorstep in minutes.",
    buttonText: "See Delivery Services",
  },
  {
    id: 2,
    image: image2,
    header: "Quick N Delicious",
    paragraph:
      "Order from us and always expect quality food that is fresh and memorable.",
    buttonText: "See Products",
  },
  {
    id: 3,
    image: image3,
    header: "Quick N Easy",
    paragraph: "Order from us and enjoy the convenience of our services.",
    buttonText: "Become a Customer",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (id) => {
    if (id === 1) {
      navigate("/about");
    } else if (id === 2) {
      navigate("/products");
    } else if (id === 3) {
      navigate("/contact");
    }
  };

  return (
    <div className="slideshow">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.header} />
            <div className="content">
              <h1>{slide.header}</h1>
              <p>{slide.paragraph}</p>
              <button onClick={() => handleNavigation(slide.id)}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
