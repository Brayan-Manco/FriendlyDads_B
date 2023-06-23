import sequelize from "../db/connection";
import { DataTypes } from "sequelize";
import { Usuario } from "./tbl_usuario";
import { Tipo_doc } from "./tbl_tipo_doc";

export const Bebe = sequelize.define('tbl_bebe',{
    id_bebe: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_completo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    fk_id_tipo_doc:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    numero_i:{
        type:DataTypes.STRING,
        allowNull: false
    },
    edad:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    fk_id_usuario:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
        
    },
});

Bebe.belongsTo(Tipo_doc, {
    foreignKey: 'fk_id_tipo_doc'
});

Bebe.belongsTo(Usuario, {
    foreignKey: 'fk_id_usuario'
});