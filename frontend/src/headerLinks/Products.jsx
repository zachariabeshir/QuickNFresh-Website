import React from "react";

import ProductCarousel from "../Products/ProductCarousel.jsx";
import ProductIntro from "../Products/ProductIntro.jsx";
import ShippingTrust from "../Products/ShippingTrust.jsx";
import Footer from "../Footer.jsx";

function Products() {
  return (
    <>
      <ProductIntro />
      <ShippingTrust />
      <ProductCarousel />
      <Footer />
    </>
  );
}

export default Products;
