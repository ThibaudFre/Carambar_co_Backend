import express from 'express';
import sequelize from "./config/db.js";
import seedDatabase from "./seeder/seed.js";
import seeds from "./seeder/jokes.json" with {type: 'json'}
import jokesRoutes from "./routes/jokesRoutes.js"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(jokesRoutes);

const startServer = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    app.listen(port, () => {
      console.log(`app listening on port ${port}`)
    })

    await seedDatabase(seeds)
  } catch (error){
    console.error('Unable to start server:', error);
  }
}

startServer()

export default sequelize;


