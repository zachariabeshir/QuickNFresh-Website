import React, { useState, useEffect, useRef } from "react";
import "./mainStyles/ChatBot.css";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm Quick N Fresh's assistant. You can ask about our store hours or submit your company info. What’s your first name? (Say 'restart' any time to start over)",
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false);
  const [companyData, setCompanyData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    companyAddress: "",
    phoneNumber: "",
    messSubject: "",
    messBody: "",
  });

  const questions = [
    { key: "firstName", prompt: "What is your first name?" },
    { key: "lastName", prompt: "Thanks! Now, your last name?" },
    { key: "companyName", prompt: "What's your company name?" },
    { key: "companyEmail", prompt: "What's your company email?" },
    { key: "companyAddress", prompt: "Where is your company located?" },
    { key: "phoneNumber", prompt: "What's the best number to reach you at?" },
    { key: "messSubject", prompt: "What would you like to talk about?" },
    { key: "messBody", prompt: "Please describe your message in detail." },
  ];

  const generalResponses = {
    "store hours":
      "Our store is open Monday through Saturday, from 6 AM to 6 PM.",
    hours: "We’re open from 6 AM to 6 PM, Monday through Saturday!",
    "contact info":
      "You can contact us through this chatbot or email us directly at quicknfreshproduce@icloud.com.",
    hello:
      "Hello! I'm here to help with your company submission or answer general questions like our store hours.",
    thanks:
      "You're welcome! Feel free to ask anything else or submit your company info.",
  };

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (text, sender = "bot") => {
    setMessages((prev) => [
      ...prev,
      { sender, text: `${text} (Say 'restart' any time to start over)` },
    ]);
  };

  const handleUserInput = async (e) => {
    e.preventDefault();
    const userText = input.trim();
    if (!userText) return;

    addMessage(userText, "user");
    setInput("");

    const lowerText = userText.toLowerCase();

    if (lowerText.includes("restart") || lowerText.includes("start over")) {
      resetChat();
      return;
    }

    for (let key in generalResponses) {
      if (lowerText.includes(key)) {
        addMessage(generalResponses[key]);
        return;
      }
    }

    if (lowerText.includes("submit") || lowerText.includes("contact")) {
      setStep(0);
      setAwaitingConfirmation(false);
      addMessage(questions[0].prompt);
      return;
    }

    if (awaitingConfirmation) {
      if (lowerText.includes("yes")) {
        await submitToBackend();
      } else {
        addMessage("Which field would you like to change?");
      }
      return;
    }

    const currentQuestion = questions[step];

    if (currentQuestion.key === "companyEmail" && !validateEmail(userText)) {
      addMessage("Please enter a valid email address.");
      return;
    }

    setCompanyData((prev) => ({ ...prev, [currentQuestion.key]: userText }));

    if (step + 1 < questions.length) {
      setStep(step + 1);
      addMessage(questions[step + 1].prompt);
    } else {
      setAwaitingConfirmation(true);
      showConfirmation({ ...companyData, [currentQuestion.key]: userText });
    }
  };

  const showConfirmation = (data) => {
    const summary = `Please confirm the following info:\n\n

    Name: ${data.firstName} ${data.lastName}\n
    Company: ${data.companyName}\n
    Email: ${data.companyEmail}\n
    Phone: ${data.phoneNumber}\n
    Address: ${data.companyAddress}\n
    Subject: ${data.messSubject}\n
    Message: ${data.messBody}\n\n

    Reply 'yes' to confirm or 'no' to make changes.`;
    addMessage(summary);
  };

  const submitToBackend = async () => {
    try {
      const submissionWithDate = {
        ...companyData,
        dateSubmitted: new Date().toISOString(), // Add current date/time
      };

      const res = await fetch("/api/front", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionWithDate),
      });

      const data = await res.json();
      addMessage(data.message || "Thanks! Your info has been submitted.");
    } catch (err) {
      addMessage("There was an error submitting your info. Please try again.");
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const resetChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Hi there! I'm Quick N Fresh's assistant. You can ask about our store hours or submit your company info. What’s your first name? (Say 'restart' any time to start over)",
      },
    ]);
    setCompanyData({
      firstName: "",
      lastName: "",
      companyName: "",
      companyEmail: "",
      companyAddress: "",
      phoneNumber: "",
      messSubject: "",
      messBody: "",
    });
    setStep(0);
    setAwaitingConfirmation(false);
  };

  return (
    <>
      <div
        className={`chatbot-toggle ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        💬
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Quick N Fresh Assistant</span>
            <button className="button" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sender === "bot" ? "bot-msg" : "user-msg"}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <form onSubmit={handleUserInput} className="input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
