# fullstack-starwars-app
## Web app using: 
### Backend: 
  * [Node js](https://nodejs.org/en/) 
  * [Express js](https://expressjs.com/) 
  * [Knex](http://knexjs.org/)
  * [Postgresql](https://www.postgresql.org/)
  * [Typescript](https://www.typescriptlang.org/)
  * [Sendgrid](https://sendgrid.com/)


### Comments:

 I made a simple clone of [swapi](https://swapi.co/api/) with the propose of put in practice my knowledges of Express, NodeJS, Knex and Postgresql. I used some Functional Programming approaches like Memoization and function composition mixed with some MVC and OOP to keep the global design organized. The propose was really play a bit with knex and typescript. When the project is finished I will post it in my portfolio.
 The app has some Email api_key validation process 
 I tried to make the things as Vanila as possible.  
 
The app is still in development. 
 To run the app just clone the project and modify the knexfile.ts with your postgres connection data. 
 Run "npm run build" in the project folder. Inside dist folder run knex migrate:latest, and then knex:seed run and then npm start. That's all.
 
