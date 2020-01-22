// connect to live server
const mongoose = require('mongoose');
const server = require('./server');
const config = require('./api/config');

mongoose.connect(config.db, {}, err => {
  if (err) return console.log(err);
  console.log('DB connection successful!!');
});

const port = config.port;

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`Server is running on ${port}`);
});
