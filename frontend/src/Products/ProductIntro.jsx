import React from "react";
import "./Styles/ProductIntro.css";

function ProductIntro() {
  return (
    <div className="product-intro-container">
      <div className="product-intro-content">
        <h1 className="product-title">Our Premium Produce Selection</h1>
        <p className="product-subtitle">
          Hand-picked, farm-fresh, and delivered fast. Quick N Fresh offers only
          the best.
        </p>

        <div className="product-intro-highlight">
          <h2 className="highlight-heading">What Makes Us Different?</h2>
          <ul className="highlight-list">
            <li>🌿 Locally & Responsibly Sourced Produce</li>
            <li>🚛 Temperature-Controlled Nationwide Delivery</li>
            <li>🥑 Exceptional Quality & Freshness Guarantee</li>
            <li>🤝 Trusted by Restaurants, Grocers, and Families Alike</li>
          </ul>
        </div>

        <p className="product-cta">
          Explore our full catalog of fruits and vegetables to discover the
          Quick N Fresh difference. Freshness is just a click away.
        </p>
      </div>
    </div>
  );
}

export default ProductIntro;
