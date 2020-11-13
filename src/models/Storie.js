const {Model, DataTypes} = require('sequelize')

class Storie extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            author: DataTypes.STRING,
            fan_did: DataTypes.INTEGER
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Hero, { foreignKey: 'hero_id', as:'hero'});
    }
}

module.exports = Storie;