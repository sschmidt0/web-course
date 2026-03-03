import React, { useState } from "react";
import { APP_ICONS } from "@/common/app-icons";
import styles from "./chat-input.module.scss";

interface Props {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<Props> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Pregunta sobre Sarah..."
        className={styles.messageInput}
      />
      <button
        type="submit"
        className={styles.sendButton}
        disabled={!message.trim()}
        aria-label="Enviar mensaje"
      >
        {APP_ICONS["send"]}
      </button>
    </form>
  );
};