"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bebe = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const tbl_usuario_1 = require("./tbl_usuario");
const tbl_tipo_doc_1 = require("./tbl_tipo_doc");
exports.Bebe = connection_1.default.define('tbl_bebe', {
    id_bebe: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_completo: {
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
    fk_id_usuario: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
});
exports.Bebe.belongsTo(tbl_tipo_doc_1.Tipo_doc, {
    foreignKey: 'fk_id_tipo_doc'
});
exports.Bebe.belongsTo(tbl_usuario_1.Usuario, {
    foreignKey: 'fk_id_usuario'
});
