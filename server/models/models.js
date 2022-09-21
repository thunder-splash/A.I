const sequelize = require('../db')
const {INTEGER, STRING} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: STRING, unique: true},
    password: {type: STRING},
    role: {type: STRING, defaultValue: "USER"},
})

const Preferences = sequelize.define('preferences',{
    id: {type: INTEGER, primaryKey:true, autoIncrement:true},
    userId:{type:INTEGER},
    name: {type: STRING, unique: true, allowNull: false},
    type: {type: STRING, unique: true},
    title: {type: STRING, allowNull: false},
    description: {type: STRING, allowNull: false},
})

const Weight = sequelize.define('weight',{
    id: {type: INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: STRING, unique: true, allowNull: false},
    value: {type: INTEGER, allowNull: false, defaultValue: 0.5},
})

User.hasOne(Preferences)
Preferences.belongsTo(User)

Preferences.hasMany(Weight)
Weight.belongsTo(Preferences)

module.exports = {
    User,
    Preferences,
    Weight
}


