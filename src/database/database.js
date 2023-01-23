import Sequelize from 'sequelize';
import config from "./../config.js";

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'postgres'
});

(async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log(`conect database = ${config.database}`)
  } catch (err) {
    throw new Error(err)
  }
})()

export default sequelize