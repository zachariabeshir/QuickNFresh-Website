import React from "react";
import "./mainStyles/CustomerRatings.css";

function CustomerRatings() {
  const ratings = [
    {
      id: 1,
      name: "Selim Frljuckic",
      rating: 5,
      review:
        "The best and most reliable produce delivery service I have ever worked with..",
    },
    {
      id: 2,
      name: "Jose Gonzalez",
      rating: 5,
      review:
        "Great Quality produce, honest sales people, quick delivery and prices unmatched you won't regret shopping here.",
    },
    {
      id: 3,
      name: "Abdullah Khalil",
      rating: 5,
      review:
        "The best produce I have purchased..service was outright excellent..",
    },
  ];

  return (
    <>
      <h1 className="intro-ratings">See What People Have to Say</h1>
      <div className="ratings-container">
        {ratings.map((rating) => (
          <div key={rating.id} className="rating-card">
            <h3 className="customer-name">{rating.name}</h3>
            <div className="rating-stars">
              {"★".repeat(rating.rating)}
              {"☆".repeat(5 - rating.rating)}
            </div>
            <p className="review-text">- "{rating.review}"</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomerRatings;
