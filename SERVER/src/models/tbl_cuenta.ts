import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Rol } from "./tbl_rol";

export const Cuenta = sequelize.define('tbl_cuenta',{
    id_cuenta: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    usuario:{
        type:DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    correo:{
        type:DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    contrasena:{
        type:DataTypes.STRING,
        allowNull: false
    },
    fk_id_rol:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    primera_vez: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Valor por defecto
      },
});


Cuenta.belongsTo(Rol, {
    foreignKey: 'fk_id_rol'
});