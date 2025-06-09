const Company = require("../model/Company");
const nodemailer = require("nodemailer");
require("dotenv").config();

const addCompany = async (req, res) => {
  try {
    const companyData = req.body;
    console.log(companyData);

    // Check if all fields are filled
    if (
      !companyData.firstName ||
      !companyData.lastName ||
      !companyData.companyName ||
      !companyData.companyEmail ||
      !companyData.companyAddress ||
      !companyData.phoneNumber ||
      !companyData.messSubject ||
      !companyData.messBody
    ) {
      return res.status(400).json({
        message: "Missing fields! Please fill in all fields to proceed.",
      });
    }

    // Validate email address
    if (!validateEmail(companyData.companyEmail)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    // Validate phone number
    if (companyData.phoneNumber.length !== 10) {
      return res.status(400).json({ message: "Phone Number Invalid." });
    }

    // Save the company data to the database
    const newCompany = new Company(companyData);
    await newCompany.save();

    // Sends email to the admin
    sendSubmissionEmail(companyData);

    return res.json({ message: "Thank You! We will contact you soon." });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

module.exports = { addCompany };

const transporter = nodemailer.createTransport({
  service: "gmail", // Or another provider like Outlook
  auth: {
    user: process.env.EMAIL_FROM, // Your email
    pass: process.env.EMAIL_PASSWORD, // Use App Password if using Gmail
  },
});

// Function to send the email
function sendSubmissionEmail(formData) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO, // You can change this to send to a different admin email
    subject: "New Company Contact for Quick N Fresh LLC",
    text: `
            New submission received:

            Name: ${formData.firstName} ${formData.lastName}
            Company: ${formData.companyName}
            Email: ${formData.companyEmail}
            Phone: ${formData.phoneNumber}
            Address: ${formData.companyAddress}
            Subject: ${formData.messSubject}
            Message: ${formData.messBody}
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
