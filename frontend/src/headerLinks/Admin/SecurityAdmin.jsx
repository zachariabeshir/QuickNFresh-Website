import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/SecurityAdmin.css";

function SecurityAdmin() {
  const [accessCode, setAccessCode] = useState(""); // State to hold the access code
  const [responseMessage, setResponseMessage] = useState(""); // State to hold the server's response message
  const navigate = useNavigate(); // React Router hook for navigation

  const handleSubmit = () => {
    if (accessCode) {
      fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessCode }),
      })
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Failed to authenticate");
          }

          setResponseMessage(`Success: ${data.message}`);
          navigate("/dash");
        })
        .catch((error) => {
          setResponseMessage(`Error: ${error.message}`);
        });
    } else {
      setResponseMessage("Please enter an access code."); // Notify the user if the input is empty
    }
  };

  return (
    <div className="security-admin">
      <h1>Welcome To Quick N Fersh LLC Admin Page</h1>
      <div className="enter-access-code">
        <input
          type="password"
          placeholder="Enter Access Code"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)} // Update state on input change
          aria-label="Access Code" // Improves accessibility
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {/* Display the response message */}
      {responseMessage && (
        <div className="response-message">
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
}

export default SecurityAdmin;
