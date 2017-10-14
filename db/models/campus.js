const db = require('../db');
const DataTypes = db.Sequelize;


const Campus = db.define('campus', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING
})

module.exports = Campus;

