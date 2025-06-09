import React from "react";
import "./pageStyles/About.css";
import Footer from "../Footer.jsx";
import CustomerRatings from "../CustomerRatings.jsx";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About Quick N Fresh LLC</h1>

          <p className="about-text">
            At <span className="highlight-orange">Quick N Fresh LLC</span>, we
            specialize in delivering farm-fresh produce with speed, reliability,
            and care. With a commitment to quality and customer satisfaction,
            we’ve built a reputation for shipping the freshest fruits and
            vegetables across the nation. Whether it’s crisp apples, vibrant
            greens, or ripe avocados, we handle every item with precision and
            purpose.
          </p>

          <section className="about-highlight">
            <h2 className="highlight-title">
              Domestic Shipping You Can Count On
            </h2>
            <p className="highlight-text">
              From coast to coast, Quick N Fresh ensures timely,
              temperature-controlled shipping that preserves freshness from our
              farms to your shelves. We partner with trusted logistics providers
              to guarantee that your produce arrives quickly, safely, and in
              peak condition.
            </p>
          </section>

          <p className="about-text">
            We believe in transparency, trust, and taste. Every delivery
            reflects our core mission — to bring produce that’s not only fresh,
            but also responsibly sourced and ready to enjoy. Join the growing
            list of businesses and families who rely on{" "}
            <span className="highlight-green">Quick N Fresh</span> for quality
            they can trust.
          </p>

          <hr />

          <section className="aboutOwner">
            <h2 className="highlight-title">Meet the Owner</h2>

            <p className="highlight-text">
              As the founder of Quick N Fresh LLC,{" "}
              <span className="highlight-orange">Salah Abdullah</span> is
              dedicated to delivering the best produce to customers nationwide.
              With a deep passion for agriculture and a commitment to quality,
              Salah ensures that every shipment meets the highest standards of
              freshness and flavor.
            </p>

            <p className="highlight-text">
              Salah and his family have been in the produce industry for over 30
              years. They’ve built successful produce businesses in the United
              States and were once prominent business owners in Palestine, where
              his grandfather was one of the country’s most respected sellers.
            </p>

            <div className="founder-info">
              <img
                src="../../founder-photo.jpeg"
                alt="Founder Salah Abdullah"
                className="img-founder"
              />
              <div className="founder-bio">
                <h3 className="highlight-green">Salah Abdullah</h3>
                <p className="highlight-text">Founder, Quick N Fresh LLC</p>
                <hr />
                <p className="highlight-text">
                  Born and raised in Southern California, Salah is committed to
                  supporting SoCal business owners who serve millions of
                  Californians and beyond. Shortly after graduating high school,
                  he joined his father in the produce business. Fast forward 10
                  years, Salah now leads Quick N Fresh LLC — a company rooted in
                  passion, family legacy, and an unwavering promise to deliver
                  excellence in every box.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CustomerRatings />
      <Footer />
    </>
  );
}

export default About;
