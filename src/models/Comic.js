const {Model, DataTypes} = require('sequelize')

class Comic extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            author: DataTypes.STRING,
            publisher: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Hero, { foreignKey: 'hero_id', as:'hero'});
    }
}

module.exports = Comic;