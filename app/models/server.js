
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config');

class Server {
  #app;
  #port;
  #authPath   = '/api/v1/auth';
  #usersPath  = '/api/v1/users';

  constructor() {
    this.#app = express();
    this.#port = process.env.PORT;
    this.#connectDb();
    this.#middlewares();
    this.#routes();
  }

  async #connectDb() {
    await dbConnection();
  }
  
  #middlewares() {
    // CORS
    this.#app.use(cors());

    // Read and parse Request body
    this.#app.use(express.json());
  }

  #routes() {
    this.#app.use(this.#authPath, require('../routes/auth'));
    this.#app.use(this.#usersPath, require('../routes/users'));
  }

  listen() {
    this.#app.listen(this.#port, () => {
      console.log(`App listening on port ${this.#port}`);
    });
  }

}

module.exports = Server;