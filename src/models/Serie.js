const {Model, DataTypes} = require('sequelize')

class Serie extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            director: DataTypes.STRING,
            season_numbers: DataTypes.INTEGER
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Hero, { foreignKey: 'hero_id', as:'hero'});
    }
}

module.exports = Serie;