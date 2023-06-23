"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tipo_doc = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
exports.Tipo_doc = connection_1.default.define('tbl_tipo_doc', {
    id_tipo_doc: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_doc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    siglas: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
