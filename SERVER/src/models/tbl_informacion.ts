import sequelize from "../db/connection";
import { DataTypes } from "sequelize";
import { Clasificacion } from "./tbl_clasificacion";
import { Administrador } from "./tbl_administrador";

export const Informacion = sequelize.define('tbl_informacione',{
    id_info: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },

    archivo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    fk_id_clasificacion:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    fk_id_admin: {
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
});

Informacion.belongsTo(Clasificacion, {
    foreignKey: 'fk_id_clasificacion'
});

Informacion.belongsTo(Administrador, {
    foreignKey: 'fk_id_admin'
})

