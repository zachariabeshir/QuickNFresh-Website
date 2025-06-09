import React from "react";
import "./Styles/ShippingTrust.css";

function ShippingTrust() {
  const trustPoints = [
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      text: "From coast to coast, your produce is delivered fast and fresh—wherever you are.",
    },
    {
      icon: "❄️",
      title: "Cold Chain Protected",
      text: "Temperature-controlled logistics to maintain peak freshness throughout transit.",
    },
    {
      icon: "✅",
      title: "Quality Guarantee",
      text: "Every shipment is hand-checked to ensure you're receiving only the best.",
    },
    {
      icon: "🕒",
      title: "Next-Day Dispatch",
      text: "Orders are packed and shipped quickly to ensure minimal wait time.",
    },
  ];

  return (
    <div className="shipping-trust-container">
      <h2 className="trust-heading">Your Produce, Delivered With Care</h2>
      <div className="trust-cards">
        {trustPoints.map((point, index) => (
          <div key={index} className="trust-card">
            <div className="trust-icon">{point.icon}</div>
            <h3 className="trust-title">{point.title}</h3>
            <p className="trust-text">{point.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShippingTrust;
