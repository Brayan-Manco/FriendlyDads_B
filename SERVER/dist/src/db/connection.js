"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('FRIENDLY_DADS', 'root', '0805', {
    host: 'localhost',
    dialect: 'mysql'
});
// const sequelize = new Sequelize(process.env.DATABASE_NAME || 'nulo', process.env.DATABASE_USER || 'nulo', process.env.DATABASE_PASSWORD || 'nulo',{
//     host: process.env.DATABASE_HOST,
//     dialect: 'mysql'
// });
exports.default = sequelize;
