const {Model, DataTypes} = require('sequelize')

class Event extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsToMany(models.Hero, { foreignKey: 'event_id', through: 'hero_events', as:'heroes'});
    }
}

module.exports = Event;