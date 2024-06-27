import { Sequelize } from "sequelize";

const db = new Sequelize('proyect_calg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db