# express-rest-google-auth-server
This repository backs an Express REST server that integrates "Sign in with Google" to provide user authentication.

## Prerequisites

This is a Node.js® application, as such, you will need to have Node.js installed alongsige `npm` ( Node Package Manager) in your target host to be able to run this application.

## Getting started

### Install the dependencies

To be able to run this application, you will need to install its dependencies. To do so, once you have cloned this repository, navigate into application source directory and install all the Node.js packages that it needs: 

```bash
cd app/
npm install
```

### Configure environment variables

This app uses a module named `dotenv` to manage environment variables. It loads environment variables from a `.env` file into the Node process.env API. To test it, create the file `app/.env` and declare a `PORT` environment variable with a value of your choice, e.g: `8080` do this by pasting the following content to the file:

```bash
PORT=8080
```

### Run the application

You can run the application in production mode by issuing the following command:

```bash
node app.js
```

If you want to tweak/hack this source code and see what happens introducing some changes on the fly run the following command to restart the application every time you change something:

```bash
nodemon app.js
```

## References

- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Node.js](https://nodejs.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [npm](https://www.npmjs.com/package/npm)
