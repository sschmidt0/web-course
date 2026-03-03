import React from "react";
import styles from "./chat-message.module.scss";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Props {
  message: Message;
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`${styles.messageWrapper} ${message.isUser ? styles.userMessage : styles.botMessage}`}>
      <div className={styles.message}>
        {!message.isUser && <span className={styles.botIcon}>🤖</span>}
        <div className={styles.messageContent}>
          <p className={styles.messageText}>{message.text}</p>
          <span className={styles.timestamp}>{formatTime(message.timestamp)}</span>
        </div>
        {message.isUser && <span className={styles.userIcon}>👤</span>}
      </div>
    </div>
  );
};