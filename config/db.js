import { Sequelize } from "sequelize";
import fullConfig from './config.js'; // Assurez-vous que le chemin est correct

const env = process.env.NODE_ENV || 'development';
const config = fullConfig[env];

const sequelize = new Sequelize(config);

export default sequelize;