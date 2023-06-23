import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Rol = sequelize.define('tbl_role',{
        id_rol: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_rol:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }
)
