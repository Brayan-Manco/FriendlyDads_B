import sequelize from "../db/connection";
import { DataTypes } from "sequelize";
import { Tipo_doc } from "./tbl_tipo_doc";
import { Cuenta } from "./tbl_cuenta";

export const Administrador = sequelize.define('tbl_administradore',{
    id_admin: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    // ruta_imagen:{
    //     type:DataTypes.STRING,
    //     allowNull: true
    // },
    nombres:{
        type:DataTypes.STRING,
        allowNull: false
        
    },
    apellidos:{
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
    fk_id_cuenta: {
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
});

Administrador.belongsTo(Tipo_doc, {
    foreignKey: 'fk_id_tipo_doc'
});

// Cuenta.belongsTo(Rol, {
//     foreignKey: 'fk_id_rol'
// });

Administrador.belongsTo(Cuenta, {
    foreignKey: 'fk_id_cuenta'
});