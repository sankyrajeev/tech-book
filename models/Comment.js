const { Model, DataTypes } = require('sequelize');
// const { now } = require('sequelize/types/utils');
const sequelize = require('../config/connection');


class Comment extends Model {

}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        comment: {
            type: DataTypes.STRING,
        },

        date: {
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:now

        }

})