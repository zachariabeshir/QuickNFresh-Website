import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

import "./pageStyles/Contact.css";
import contactImage from "../assets/produce_girl.avif";
import logo from "../assets/logo.png";
import Footer from "../Footer.jsx";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    companyAddress: "",
    phoneNumber: "",
    messSubject: "",
    messBody: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Modal message updated:", modalMessage);
  }, [modalMessage]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const formatted = now.toLocaleString();

    const dataToSend = {
      ...formData,
      dateSubmitted: formatted,
    };

    try {
      const res = await axios.post("/api/front", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data && res.data.message) {
        setModalMessage(res.data.message);
      } else {
        setModalMessage("Submission successful, but no message received.");
      }
      setIsModalOpen(true);

      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        companyEmail: "",
        companyAddress: "",
        phoneNumber: "",
        messSubject: "",
        messBody: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setModalMessage("There was an error. Please try again.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="contact-page">
        <div className="sideImage">
          <img
            src={contactImage}
            alt="Contact Us"
            className="sideImage-description"
          />
          <div className="sideImage-intro">
            <img src={logo} alt="Logo" />
            <div className="divider"></div>
            <p>Customer Registration</p>
          </div>
          <hr />
          <div className="sideImage-text">
            <h3>Tell Us About Yourself</h3>
            <p>
              We’d love to hear from you! By sharing your details, you help us
              connect with you, answer your questions, and provide the best
              support for your needs. Whether you’re looking to join our
              community or just want to reach out, we’ll make sure to get back
              to you as quickly as possible!
            </p>
          </div>
        </div>

        <div className="full-contact-body">
          <div className="contact-intro">
            <h1>Contact Us</h1>
            <p>
              We are here to answer any questions you may have about our
              experiences. Reach out to us and we'll respond as soon as we can.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <h1>Become A Member of the Family</h1>
            <div className="form-row">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              id="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              type="email"
              id="companyEmail"
              placeholder="Company Email"
              value={formData.companyEmail}
              onChange={handleChange}
            />
            <input
              type="text"
              id="companyAddress"
              placeholder="Company Address"
              value={formData.companyAddress}
              onChange={handleChange}
            />
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              id="messSubject"
              placeholder="Message Subject"
              value={formData.messSubject}
              onChange={handleChange}
            />
            <textarea
              id="messBody"
              placeholder="Message"
              value={formData.messBody}
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        {isModalOpen && (
          <Modal message={modalMessage} closeModal={closeModal} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
