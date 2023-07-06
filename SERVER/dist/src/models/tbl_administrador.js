"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const tbl_tipo_doc_1 = require("./tbl_tipo_doc");
const tbl_cuenta_1 = require("./tbl_cuenta");
exports.Administrador = connection_1.default.define('tbl_administradore', {
    id_admin: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    // ruta_imagen:{
    //     type:DataTypes.STRING,
    //     allowNull: true
    // },
    nombres: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fk_id_tipo_doc: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    numero_i: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    fk_id_cuenta: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
});
exports.Administrador.belongsTo(tbl_tipo_doc_1.Tipo_doc, {
    foreignKey: 'fk_id_tipo_doc'
});
// Cuenta.belongsTo(Rol, {
//     foreignKey: 'fk_id_rol'
// });
exports.Administrador.belongsTo(tbl_cuenta_1.Cuenta, {
    foreignKey: 'fk_id_cuenta'
});
