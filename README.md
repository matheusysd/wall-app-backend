# The Wall Api

To run this project make sure you have Node installed and run following commands:

    npm install
    npm start

<p>
This is a REST API created with NodeJS and ExpressJS to give life to The Wall App.

## Environment Variables

To run the api propoerly you need to set the following properties in a .env file at project root directory:

    DB_USERNAME=[Your database name]
    DB_PASSWORD=[Your database password]
    APP_ENVIRONMENT=[The environment you wanna use: development || test || production]
    PORT=[The port at localhost you wanna use]
    PASSWORD_SECRET=[Secret used to encrypt and decrypt user passoword]
    ID_SECRET=[Secret used to encrypt and decrypt user id]
    EMAIL_NODEMAILER=[Email used by nodemailer] I will provide this at .env.example
    PASSWORD_NODEMAILER=[Email password used by nodemailer] I will provide this at .env.example
    HOST=[Host used by postgres]

## Tests

To run test:
      
      change APP_ENVIRONMENT variable to test (APP_ENVIRONMENT=test)
      npm start
      npm test

Tests were coded with [Jest](https://jestjs.io/)

## Data Base

PostgreSQL with [sequelize](https://sequelize.org/)

## Improvments to do

- [ ] Deploy
- [ ] More filters
- [ ] Admin login
