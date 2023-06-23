"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Informacion = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const tbl_clasificacion_1 = require("./tbl_clasificacion");
const tbl_administrador_1 = require("./tbl_administrador");
exports.Informacion = connection_1.default.define('tbl_informacione', {
    id_info: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    archivo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fk_id_clasificacion: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    fk_id_admin: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
});
exports.Informacion.belongsTo(tbl_clasificacion_1.Clasificacion, {
    foreignKey: 'fk_id_clasificacion'
});
exports.Informacion.belongsTo(tbl_administrador_1.Administrador, {
    foreignKey: 'fk_id_admin'
});
