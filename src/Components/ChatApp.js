// src/components/App.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://192.168.218.41:3001/'); // Replace with your server URL

const ChatApp = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleAuthentication = (e) => {
    e.preventDefault();
    // Simulate authentication, replace with your actual authentication logic
    socket.emit('authenticate', { username, key });
    setAuthenticated(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit('chat message', { from: username, message });
    setMessage('');
  };

  return (
    <div>
      {!authenticated ? (
        <form onSubmit={handleAuthentication}>
          <label>
            Enter your username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Enter your key:
            <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
          </label>
          <button type="submit">Authenticate</button>
        </form>
      ) : (
        <div>
          <h3>Welcome, {username}!</h3>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{`${msg.from}: ${msg.message}`}</li>
            ))}
          </ul>
          <form onSubmit={handleSendMessage}>
            <label>
              Enter your message:
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
