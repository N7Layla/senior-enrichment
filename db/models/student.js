const db = require('../db');
const DataTypes = db.Sequelize;

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    isEmail: true
  }
})


module.exports = Student;
