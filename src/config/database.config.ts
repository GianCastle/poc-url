import { Sequelize } from "sequelize";
import config from "./env.config";

const db = new Sequelize('app', config.DB_USER, config.DB_PASSWORD, {
    storage: config.DB_STORAGE,
    dialect: 'sqlite',
    logging: false
});

export default db;