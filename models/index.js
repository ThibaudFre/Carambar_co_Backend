
import { DataTypes } from "sequelize";
import sequelize from "./../config/db.js";


const Joke = sequelize.define('joke', {
    riddle: {
        type: DataTypes.STRING,
    },
    answer: {
        type: DataTypes.STRING,
    }
},
    {
        timestamps: false,
    }
)

export default Joke;