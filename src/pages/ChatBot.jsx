import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";

// Ensure your API key is stored securely. You may use an environment variable.
const API_KEY = "pF5od15XH4nGzK7463dz4YC9gHnJRvfj";

const ChatBot = () => {
  // State declarations
  const [sessionId, setSessionId] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Generate a unique sessionId once when the component mounts
  useEffect(() => {
    if (!sessionId) {
      const newSessionId = Date.now().toString();
      setSessionId(newSessionId);
    }
  }, [sessionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || !sessionId) return;

    setLoading(true);
    setError("");
    try {
      // Add user message to the conversation
      setMessages((prev) => [...prev, { text: message, isBot: false }]);

      const response = await axios.post(
        `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`,
        {
          endpointId: "predefined-openai-gpt4o",
          query: message,
          pluginIds: ["plugin-1739469853"],
          responseMode: "sync",
        },
        { headers: { apikey: API_KEY } }
      );

      // Extract the bot response from the API response structure
      const botResponse = response.data.data.content || "No response received";
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);

      setMessage("");
    } catch (err) {
      console.error("Error submitting query:", err);
      setError("Failed to get response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Course Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            >
              ×
            </button>
          </div>

          <div className={styles.messagesArea}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.isBot ? styles.botMessage : styles.userMessage
                }`}
              >
                {msg.text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
            {loading && <div className={styles.loading}>Thinking...</div>}
            {error && <div className={styles.error}>{error}</div>}
          </div>

          <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about courses..."
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              Send
            </button>
          </form>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className={styles.chatButton}>
        💬
      </button>
    </div>
  );
};

export default ChatBot;
