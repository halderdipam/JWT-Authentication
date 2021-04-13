const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')
const validateUser = require('../validation/validate')

// const { error } = validateUser(req.body);

const User = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
              msg: 'Name must be alphabat character'
            },
            len: {
              args: [3, 255],
              msg: "Name must be minimum 3 character."
            }
          }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: {
              msg: "Enter the valid email"
            }
          }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
              args: [4, 255],
              msg: "Password must be 4 character"
            }
          }
    },

});

module.exports = User


