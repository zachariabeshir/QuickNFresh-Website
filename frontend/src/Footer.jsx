import React from "react";
import "./mainStyles/Footer.css"; // Make sure to link the CSS file
import Logo from "./assets/logo.png"; // Import your logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-1">
        <p className="footer-description">
          At Quick N Fresh LLC, our mission is simple: to deliver farm-fresh
          produce with unmatched speed, quality, and care. We believe that
          everyone deserves access to healthy, delicious fruits and vegetables —
          no matter where they are. That’s why we’ve made it our goal to bridge
          the gap between farms and families, grocers, and businesses across the
          country. With a deep commitment to sustainability, transparency, and
          customer satisfaction, we strive to be more than just a produce
          provider — we aim to be a trusted partner in every delivery. Freshness
          is our promise. Service is our passion.
        </p>
        <hr className="divider" />
      </div>

      <div className="footer-content">
        <img src={Logo} alt="Quick N Fresh logo" className="footer-logo" />
        <p className="footer-company">
          © 2025 Quick N Fresh LLC. All rights reserved.
        </p>

        <div className="footer-nav">
          <a href="/" className="footer-link">
            Home
          </a>
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
        </div>

        <div className="footer-contact">
          <p>📞 (949) 379 - 4099</p>
          <p>✉️ quicknfresh8@gmail.com</p>
          <p>📍 Alameda Tower, 800 McGarry St, Los Angeles, CA 90021</p>
        </div>
      </div>
      <p className="footer-tagline">
        Fresh produce. Trusted delivery. Coast to coast.
      </p>
    </footer>
  );
}

export default Footer;
