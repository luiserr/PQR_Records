const express = require('express');
const http = require('http');
const next = require('next');
const socketIO = require('socket.io');

const port = parseInt(process.env.PORT || 3000);
const nextApp = next({dev: true});
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {

  const app = express();
  const server = http.Server(app);
  const io = new socketIO.Server();

  io.attach(server);

  io.on('connect', (socket) => {
    console.log('connection');

    socket.on('disconnect', () => {
      console.log('client disconnected');
    })
  });

  io.emit('hello', 'Luis');


  app.all('*', (req, res) => {
    req.io = io;
    nextHandler(req, res)
  });

  server.listen(port, (error) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});

