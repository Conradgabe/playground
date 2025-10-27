import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage.jsx";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessageRef}>
      {chatMessages.map((chat) => {
        return (
          <ChatMessage
            message={chat.message}
            sender={chat.sender}
            key={chat.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
