const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const routes = require('./routes');

const PORT = process.env.PORT || 3001;


io.on('connection', socket => {

  socket.on('message', (data) => {
    socket.emit('serverToClientMessage', data);
  });

  socket.on('disconnect', () => {
    console.log("See ya");
    return;
  });
});

// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);
require('./services/passport');
// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reduxTodo', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

server.listen(PORT);
