const sequelize = require('./sequelize')
const { User } = require('../model')

sequelize.sync({force:false})
    .then(() => { console.log('Model created sucessfully') })
    .catch((err) => { console.log('error: ', err) })


module.exports = {
    User
}