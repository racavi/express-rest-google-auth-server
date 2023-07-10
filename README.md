# express-rest-google-auth-server
This repository backs an Express REST server that integrates "Sign in with Google" to provide user authentication.

## Prerequisites

This is a Node.js® application, as such, you will need to have Node.js installed alongsige `npm` ( Node Package Manager) in your target host to be able to run this application.

If you are not able to access a MongoDB instance, you can provision one to let the application connect to it whenever you have Docker installed in your machine.

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

Further environment variables are expected:

- `GOOGLE_CLIENT_ID`: This is [your Google API client ID](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)

### Start local database

To support both development and testing efforts this repository hosts a Docker Compose file that can be used to provision one MongoDB instance alongside a Mongo Express instance as Docker containers. To create both instances you are expected to run the following at your command prompt:

```bash
docker compose -f docker-compose.yaml up -d
```

You can check the status of the containers issuing the following command:

```bash
docker compose ps
```

To stop both containers when you are done developing/testing simply run this command:

```bash
docker compose down
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

### Create User accounts

You may want to try out 'Sign In' feature. To successfully test this flow, a User account is expected to be already present in the system before trying to 'Sign In' using such email.  

In order to create an account you only need to call the User creation endpoint with an email value. Here is an example call using `curl` command:

```bash
curl --location 'http://localhost:8080/api/v1/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mail": "my_user@gmail.com"
}'
```

## References

- [Docker](https://www.docker.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [MongoDB](https://www.mongodb.com/)
- [Mongo Express](https://github.com/mongo-express/mongo-express)
- [Node.js](https://nodejs.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [npm](https://www.npmjs.com/package/npm)
