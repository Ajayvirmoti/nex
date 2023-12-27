// server/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
// const path = require('path');
// const cors = require('cors');
// const bodyParser = require('body-parser'); // Add body-parser for parsing JSON in requests

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const users = {
  "user1": { key: "unique_key_1" },
  "user2": { key: "unique_key_2" },
  "user3": { key: "12345" }
  // Add more users as needed
};

// CORS middleware
// const corsOptions = {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };
// app.use(cors(corsOptions));

// Use bodyParser to parse JSON in requests
// app.use(bodyParser.json());

// Serve static files from the build directory
// app.use(express.static(path.join(__dirname, '../build')));

// External API endpoint for authentication
// app.post('/authenticate', (req, res) => {
//   const { username, key } = req.body;

//   if (users[username] && users[username].key === key) {
//     res.status(200).json({ success: true, message: 'Authentication successful' });
//   } else {
//     res.status(401).json({ success: false, message: 'Authentication failed' });
//   }
// });

// Serve the React app for any other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('authenticate', (data) => {
    const { username, key } = data;

    if (users[username] && users[username].key === key) {
      socket.emit('authentication success', { username });
    } else {
      socket.emit('authentication failure');
      socket.disconnect();
    }
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});