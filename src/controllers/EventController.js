const { store, index } = require("./HeroController");

const Event = require('../models/Event');
const Hero = require('../models/Hero');

module.exports = {
    async index(req, res){
        const {hero_id} = req.params;

        const hero = await Hero.findByPk(hero_id,{
            include: { association: 'events'}
        });

        if(!hero){
            return res.status(404).json({error:'Hero not found'});
        };

        return res.json(hero.events);
    },

    async store(req, res) {
        const {hero_id} = req.params;
        const {name} = req.body

        if(!name){
            return res.status(404).json({error:'Error creating event.Please check the fields.'});
        }

        const hero = await Hero.findByPk(hero_id);

        if(!hero){
            return res.status(404).json({error:'Hero not found'});
        }

        const [event, created] = await Event.findOrCreate({
            where: {name}
        });

        await hero.addEvent(event);
        return res.json(event)
    }
};