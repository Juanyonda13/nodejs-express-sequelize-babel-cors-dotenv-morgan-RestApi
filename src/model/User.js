import { DataTypes,Sequelize, Model} from "sequelize";
import sequelize from "../database/database.js";

const User= sequelize.define("Users",{
    name:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    },
    state:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    }
})

export default User
