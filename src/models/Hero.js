const {Model, DataTypes} = require('sequelize')

class Hero extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING
        },{
            sequelize,
            tableName:'heroes'
        })
    }

    static associate(models){
        this.hasMany(models.Comic, { foreignKey: 'hero_id', as:'comics'});
        this.hasMany(models.Serie, { foreignKey: 'hero_id', as:'series'});
        this.hasMany(models.Storie, { foreignKey: 'hero_id', as:'stories'});
        this.belongsToMany(models.Event, { foreignKey: 'hero_id', through: 'hero_events', as:'events'});
    }
}

module.exports = Hero;