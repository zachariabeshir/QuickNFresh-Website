import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Navigation components
import Home from "./headerLinks/Home"; // Import your Home component
import About from "./headerLinks/About"; // Import your About component
import Products from "./headerLinks/Products"; // Import your Products component
import Contact from "./headerLinks/Contact.jsx"; // Import your Contact component
import PrivacyPolicy from "./headerLinks/PrivacyPolicy.jsx"; // Import your PrivacyPolicy component
import SecurityAdmin from "./headerLinks/Admin/SecurityAdmin.jsx"; // Import your SecurityAdmin component
import AdminPage from "./headerLinks/Admin/AdminPage.jsx"; // Import your AdminPage component

// Import body components
import Header from "./home-header/Header.jsx";
import ChatBot from "./ChatBot.jsx";

function App() {
  return (
    <>
      <Header /> {/* Header component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root path */}
        <Route path="/about" element={<About />} /> {/* About path */}
        <Route path="/products" element={<Products />} />
        {/* Products path */}
        <Route path="/contact" element={<Contact />} /> {/* Contact path */}
        <Route path="/privacy" element={<PrivacyPolicy />} />{" "}
        {/* Default path */}
        <Route path="/admin" element={<SecurityAdmin />} /> {/* Admin path */}
        <Route path="/dash" element={<AdminPage />} /> {/* Admin path */}
      </Routes>
      <ChatBot /> {/* ChatBot component */}
    </>
  );
}

export default App;
