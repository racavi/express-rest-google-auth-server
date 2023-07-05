
const express = require('express');
const cors = require('cors');

class Server {
  #app;
  #port;
  #usersPath = '/api/v1/users';

  constructor() {
    this.#app = express();
    this.#port = process.env.PORT;
    this.#middlewares();
    this.#routes();
  }

  #middlewares() {
    this.#app.use(cors());
  }

  #routes() {
    this.#app.use(this.#usersPath, require('../routes/users'));
  }

  listen() {
    this.#app.listen(this.#port, () => {
      console.log(`App listening on port ${this.#port}`);
    });
  }

}

module.exports = Server;