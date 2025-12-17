
import { DataTypes } from "sequelize";
import sequelize from "./../config/db.js";


const Joke = sequelize.define('joke', {
    riddle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
    }
)

export default Joke;