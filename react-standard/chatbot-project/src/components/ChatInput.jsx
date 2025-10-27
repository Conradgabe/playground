import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function SaveInputText(event) {
    setInputText(event.target.value);
  }

  function SendMessage() {
    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: "user", id: crypto.randomUUID() },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages((newChatMessages) => [
      ...newChatMessages,
      { message: response, sender: "robot", id: crypto.randomUUID() },
    ]);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        onChange={SaveInputText}
        placeholder="Send a message to ChatBot"
        size="30"
        value={inputText}
      />
      <button className="send-button" onClick={SendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
