// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { MessageBox, Input, Button } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import './Chat.css';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const userId = 'id_of_current_user'; // Замените это на реальный ID текущего пользователя

  useEffect(() => {
    // Загрузка сообщений с сервера при монтировании компонента
    axios.get('http://localhost:4444/messages')
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage = {
      text: input,
      position: 'right',
      userId
    };

    // Отправка сообщения на сервер
    axios.post('http://localhost:4444/messages', newMessage)
      .then(response => {
        setMessages([...messages, response.data]);
        setInput('');
      })
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div className="chat-container">
      <div className="chat-list">
        {messages.map((message, index) => (
          <MessageBox key={index} {...message} />
        ))}
      </div>
      <div className="chat-input">
        <Input
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rightButtons={
            <Button
              text="Send"
              onClick={handleSend}
            />
          }
        />
      </div>
    </div>
  );
};

export default Chat;
