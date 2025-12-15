export default {
  development: {
    dialect: 'sqlite',
    storage: './data/db.sqlite', 
    logging: console.log 
  },
  production: {
    dialect: 'sqlite',
    storage: './data/db.sqlite', 
    logging: false
  }
};