import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [recipients, setRecipients] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [showEmailBox, setShowEmailBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/generate", { prompt });
      setEmailContent(res.data);
      setShowEmailBox(true);
    } catch (err) {
      alert("Error generating email.");
    }
    setLoading(false);
  };

  const sendEmail = async () => {
    if (!recipients.trim() || !emailContent.trim()) {
      alert("Please provide recipients and email content.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/send", {
        recipients: recipients.split(",").map((r) => r.trim()),
        content: emailContent,
        subject: "Generated Email",
      });
      alert(res.data.message);
    } catch (err) {
      alert("Failed to send email.");
    }
  };

  return (
    <div className="container">
      <h1>AI Email Generator</h1>

      <label>Recipients (comma separated)</label>
      <input
        type="text"
        placeholder="e.g. john@example.com, jane@example.com"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />

      <label>Enter Prompt</label>
      <textarea
        placeholder="e.g. Write a job offer email..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={generateEmail} disabled={loading}>
        {loading ? "Generating..." : "Generate Email"}
      </button>

      {showEmailBox && (
        <>
          <h3>Edit Generated Email:</h3>
          <textarea
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            rows={12}
          />
          <button onClick={sendEmail} style={{ marginTop: "1rem" }}>
            Send Email
          </button>
        </>
      )}
    </div>
  );
}

export default App;
