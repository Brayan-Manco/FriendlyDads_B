"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const tbl_parentesco_1 = require("./tbl_parentesco");
const tbl_estado_1 = require("./tbl_estado");
const tbl_tipo_doc_1 = require("./tbl_tipo_doc");
const tbl_cuenta_1 = require("./tbl_cuenta");
exports.Usuario = connection_1.default.define('tbl_usuario', {
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    fk_id_paren: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    fk_id_estado: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
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
exports.Usuario.belongsTo(tbl_parentesco_1.Parentesco, {
    foreignKey: 'fk_id_paren'
});
exports.Usuario.belongsTo(tbl_estado_1.Estado, {
    foreignKey: 'fk_id_estado'
});
exports.Usuario.belongsTo(tbl_tipo_doc_1.Tipo_doc, {
    foreignKey: 'fk_id_tipo_doc'
});
exports.Usuario.belongsTo(tbl_cuenta_1.Cuenta, {
    foreignKey: 'fk_id_cuenta'
});
