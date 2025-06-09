import React from "react";
import HomeSlides from "../home-slides/HomeSlides";
import CardStack from "../CardStack.jsx";
import Footer from "../Footer.jsx";

function Home() {
  return (
    <>
      <HomeSlides />
      <CardStack /> {/* CardStack component*/}
      <Footer /> {/* Footer component*/}
    </>
  );
}

export default Home;
