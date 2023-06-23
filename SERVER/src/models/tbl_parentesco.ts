import sequelize from "../db/connection";
import { DataTypes } from "sequelize";

export const Parentesco = sequelize.define('tbl_parentesco',{
    id_paren: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    parentesco:{
        type:DataTypes.STRING,
        allowNull: false
    }
})