import sequelize from "../db/connection";
import { DataTypes } from "sequelize";

export const Estado = sequelize.define('tbl_estado',{
    id_estado: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    estado:{
        type:DataTypes.STRING,
        allowNull: false
    }
})