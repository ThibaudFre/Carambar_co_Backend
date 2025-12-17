import express from 'express';
import sequelize from "./config/db.js";
import seedDatabase from "./seeder/seed.js";
import seeds from "./seeder/jokes.json" with {type: 'json'};
import jokesRoutes from "./routes/jokesRoutes.js"
import swaggerUi from 'swagger-ui-express';
import YAML from "yamljs"
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./config/swagger.yaml');

app.use(cors());
app.use(express.json());
app.use(jokesRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const startServer = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    await seedDatabase(seeds);
    console.log(`Database seeded successfully`);

    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    })
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer()

export default sequelize;


