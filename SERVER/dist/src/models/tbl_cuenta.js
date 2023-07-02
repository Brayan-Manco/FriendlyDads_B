"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tbl_rol_1 = require("./tbl_rol");
exports.Cuenta = connection_1.default.define('tbl_cuenta', {
    id_cuenta: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fk_id_rol: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    primera_vez: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Valor por defecto
    },
});
exports.Cuenta.belongsTo(tbl_rol_1.Rol, {
    foreignKey: 'fk_id_rol'
});
