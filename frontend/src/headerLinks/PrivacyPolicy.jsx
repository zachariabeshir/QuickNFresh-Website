import React from "react";
import "./pageStyles/PrivacyPolicy.css";
import Footer from "../Footer.jsx";

function PrivacyPolicy() {
  return (
    <>
      <div className="privacy-container">
        <div className="privacy-content">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-text">
            At <span className="highlight-orange">Quick N Fresh LLC</span>, your
            privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you
            interact with our website and services.
          </p>

          <h2 className="section-title">Information We Collect</h2>
          <p className="privacy-text">
            We may collect the following personal information:
            <ul className="list-container">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name and address</li>
              <li>Messages you submit via our forms or chatbot</li>
              <li>Time the data was submitted</li>
            </ul>
          </p>

          <h2 className="section-title">How We Use Your Information</h2>
          <p className="privacy-text">
            We use your information to:
            <ul className="list-container">
              <li>Respond to your inquiries</li>
              <li>Follow up on service requests</li>
              <li>Improve our website and customer experience</li>
            </ul>
          </p>

          <h2 className="section-title">How We Protect Your Data</h2>
          <p className="privacy-text">
            We implement security measures to protect your personal information
            and ensure it is not shared, sold, or disclosed to third parties
            without your consent.
          </p>

          <h2 className="section-title">Third-Party Services</h2>
          <p className="privacy-text">
            We may use third-party services (such as analytics tools or chatbot
            platforms) to improve your experience. These services may collect
            anonymized usage data.
          </p>

          <h2 className="section-title">Your Rights</h2>
          <p className="privacy-text">
            You have the right to request access to the personal data we have
            collected about you, or to ask that we delete it. Please contact us
            using the information below to make such a request.
          </p>

          <h2 className="section-title">Policy Updates</h2>
          <p className="privacy-text">
            We may update this Privacy Policy from time to time. All changes
            will be posted on this page with the updated date at the top.
          </p>

          <h2 className="section-title">Contact Us</h2>
          <p className="privacy-text">
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            <br />
            📧 <strong>quicknfreshproduce@icloud.com</strong>
            <br />
            📞 <strong>(949) 379-4099</strong>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
