# Carambar-co---Backend
This is the repository of the Carambar  &amp; co API Rest - a Crud wich allow the user to watch jokes (all jokes / By id/ or randomly)

How it works:

The servers is: 
- creatting the DB strucuture using sequelize.sync() in order to create tables
- creating the connection and using Port 3000 in dev mode or process.env in production
- seeding the sqlite file with jokes.json a list of pre-written jokes using seedDatabase()

The server is ready
app is ready

- The app is waiting to receive http requests. All requests are managed by routes and controller.
3 routes exist:

'/jokes/:jokeId' with Get method in order to get a joke by Idea
'/jokes/' with Get method in order to get all the jokes

