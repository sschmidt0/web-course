"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguageStore } from "@/store";
import { CHATBOT_RESPONSES } from "@/db/chatbot";
import { ChatMessage } from "./components/chat-message";
import { ChatInput } from "./components/chat-input";
import { APP_ICONS } from "@/common/app-icons";
import styles from "./chatbot.module.scss";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const { language } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatContent = CHATBOT_RESPONSES[language];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensaje inicial cuando se abre el chat
      setMessages([
        {
          id: 1,
          text: chatContent.welcomeMessage,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length, chatContent.welcomeMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const findBestResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    // Buscar coincidencias exactas en las palabras clave
    for (const response of chatContent.responses) {
      const hasKeyword = response.keywords.some(keyword =>
        lowercaseMessage.includes(keyword.toLowerCase())
      );
      if (hasKeyword) {
        return response.response;
      }
    }
    
    return chatContent.defaultResponse;
  };

  const handleSendMessage = async (messageText: string) => {
    // Añadir mensaje del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simular respuesta del bot con delay
    setTimeout(() => {
      const botResponse = findBestResponse(messageText);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      <button
        className={`${styles.chatButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat"
      >
        {isOpen ? APP_ICONS["menu-close"] : <span>🤖</span>}
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <span className={styles.botIcon}>🤖</span>
              <div>
                <h4>{chatContent.title}</h4>
                <span className={styles.subtitle}>{chatContent.subtitle}</span>
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
            >
              {APP_ICONS["menu-close"]}
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className={styles.typingIndicator}>
                <span>🤖</span>
                <div className={styles.typingDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      )}
    </>
  );
};