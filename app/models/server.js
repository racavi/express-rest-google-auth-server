
const express = require('express');

class Server {
  #app;
  #port;

  constructor() {
    this.#app = express();
    this.#port = process.env.PORT;
    this.#routes();
  }

  #routes() {
    this.#app.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }

  listen() {
    this.#app.listen(this.#port, () => {
      console.log(`App listening on port ${this.#port}`);
    });
  }

}

module.exports = Server;