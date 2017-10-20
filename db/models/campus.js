const db = require('../db');
const DataTypes = db.Sequelize;


const Campus = db.define('campus', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  image: {
    type: DataTypes.STRING,
    defaultValue: '/images/placeholder.png'
  }
})

module.exports = Campus;

