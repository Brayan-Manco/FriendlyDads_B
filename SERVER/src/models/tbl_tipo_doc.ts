import sequelize from "../db/connection";
import { DataTypes } from "sequelize";

export const Tipo_doc = sequelize.define('tbl_tipo_doc',{
    id_tipo_doc: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_doc:{
        type:DataTypes.STRING,
        allowNull: false
    },
    siglas:{
        type:DataTypes.STRING,
        allowNull: false
    }
})