import React from "react";
import Card from "./Card"; // Adjust the path if needed
import AboutHighlights from "./Highlights/AboutHighlights.jsx"; // Adjust the path if needed

const cardData = [
  {
    image: "../produce.avif",
    header: "Fresh Food in Your Backyard",
    paragraph: `At Quick N Fresh LLC, our delivery service isn’t 
      just fast—it’s legendary. We specialize in getting farm-fresh 
      produce from field to front door with unmatched speed and care. 
      Whether you're a small grocer, a bustling restaurant, or a 
      large-scale distributor, we ensure every box of crisp 
      lettuce, juicy oranges, or vibrant avocados arrives in 
      peak condition—never bruised, never late. Backed by a team 
      that values precision and freshness, we offer nationwide 
      delivery you can trust, with real-time tracking and 
      consistent cold-chain logistics. When you choose Quick N 
      Fresh, you're not just getting produce—you’re getting produce 
      delivered right.`,
    theRoute: "products",
    link_opening: "See All Foods",
  },
  {
    image: null,
    header: "Why Quick N Fresh?",
    paragraph: <AboutHighlights />,
    theRoute: null,
    link_opening: null,
  },
  {
    image: "../contacts.jpg",
    header: "An Trust Between Us",
    paragraph: `We are always prepared to provide you with the best services to meet all your produce needs. Whether you’re looking for fresh, high-quality produce or reliable delivery, we’ve got you covered. Our team is just a call away and eager to get started with you. Contact us today and experience the freshness we bring directly to your doorstep!`,
    theRoute: "contact",
    link_opening: "Talk Business",
  },
];

function CardStack() {
  return (
    <div className="card-stack">
      {cardData.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          header={item.header}
          paragraph={item.paragraph}
          theRoute={item.theRoute}
          link_opening={item.link_opening}
        />
      ))}
    </div>
  );
}

export default CardStack;
