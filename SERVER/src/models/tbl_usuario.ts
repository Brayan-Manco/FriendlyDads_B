import sequelize from "../db/connection";
import { DataTypes } from "sequelize";
import { Parentesco } from "./tbl_parentesco";
import { Estado } from "./tbl_estado";
import { Tipo_doc } from "./tbl_tipo_doc";
import { Cuenta } from "./tbl_cuenta";


export const Usuario = sequelize.define('tbl_usuario',{
    id_usuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    fk_id_paren:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    fk_id_estado:{
        type:DataTypes.INTEGER.UNSIGNED,
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

Usuario.belongsTo(Parentesco, {
    foreignKey: 'fk_id_paren'
});

Usuario.belongsTo(Estado, {
    foreignKey: 'fk_id_estado'
});

Usuario.belongsTo(Tipo_doc, {
    foreignKey: 'fk_id_tipo_doc'
});

Usuario.belongsTo(Cuenta, {
    foreignKey: 'fk_id_cuenta'
});

