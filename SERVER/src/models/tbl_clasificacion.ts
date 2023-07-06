import sequelize from "../db/connection";
import { DataTypes } from "sequelize";

export const Clasificacion = sequelize.define('tbl_clasificacione',{
    id_clasificacion: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    foto:{
        type:DataTypes.STRING,
        allowNull: false
    },
    clasificacion:{
        type:DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type:DataTypes.TEXT,
        allowNull: false
    }
})