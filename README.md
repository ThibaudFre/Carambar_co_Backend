# Carambar-co---Backend
This is the repository of the Carambar  &amp; co API Rest - a Crud wich allow the user to watch jokes (all jokes / By id/ or randomly)

How it works:

The servers is: 
- creatting the DB strucuture using sequelize.sync() in order to create tables
- creating the connection and using Port 3000 in dev mode or process.env in production
- creating & seeding the sqlite file with jokes.json a list of pre-written jokes using seedDatabase()

The server is ready
app is ready

- The app is waiting to receive http requests. All requests are managed by routes and controller.
3 routes exist:

---- WITH GET METHOD-----

'/jokes/:jokeId' with GET method in order to get a joke by Idea
'/jokes/' with GET method in order to get all the jokes
'/random-joke' with GET method in order to get a joke randomly.
'/joke-list' with GET method in order to get the list of all the jokes but only with their riddles and ids.


---- WITH POST METHOD-----

'/jokes/ with POST which create a new instance of Jokes model and add it to the DB


--------------------------------------------------------------------------------------------------

---> config.js is the configurations of the sequelizer instance
---> db.js is the instance of Sequelizer named sequelizer and can be imported all in the application in order to avoid 

Links:
- website:
- api url: https://carambar-co-backend.onrender.com
- repo Github Frontend: https://github.com/ThibaudFre/Carambar_co_Frontend
- repo Github Backend: https://github.com/ThibaudFre/Carambar_co_Backend
- Swagger: 
    - http://localhost:3000/api-docs/ -----------> try it out in dev mode.
    - https://carambar-co-backend.onrender.com/api-docs/ ---> try it out in production mode