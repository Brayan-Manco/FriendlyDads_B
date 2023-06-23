import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('FRIENDLY_DADS', 'root', '0805',{
    host: 'localhost',
    dialect: 'mysql'
});

// const sequelize = new Sequelize(process.env.DATABASE_NAME || 'nulo', process.env.DATABASE_USER || 'nulo', process.env.DATABASE_PASSWORD || 'nulo',{
//     host: process.env.DATABASE_HOST,
//     dialect: 'mysql'
// });

export default sequelize;



