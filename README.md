# fullstack-starwars-app
## Web app using: 
### Backend: 
  * [Node js](https://nodejs.org/en/) 
  * [Express js](https://expressjs.com/) 
  * [Knex](http://knexjs.org/)
  * [Postgresql](https://www.postgresql.org/)
  * [Typescript](https://www.typescriptlang.org/)


### Comments:

 I made a simple clone of [swapi](https://swapi.co/api/) with the propose of put in practice my knowledges of Express, NodeJS, Knex and Postgresql. I used some Functional Programming approaches like Memoization and function composition mixed with some MVC to keep the global design organized. The propose was really play a bit with knex and typescript. I tried to make the things as Vanila as possible.  
 
 The app could be improved and add more functionalities and those stuff. Maybe in the future :)
 
 To run the app just clone the project and modify the knexfile.ts with your postgres connection data. 
 Run "npm run build" in the project folder. Inside dist folder run knex migrate:latest, and then knex:seed run and then npm start. That's all.
 
