const { store, index } = require("./HeroController");

const Storie = require('../models/Storie');
const Hero = require('../models/Hero');

module.exports = {
    async index(req, res){
        const {hero_id} = req.params;

        const hero = await Hero.findByPk(hero_id,{
            include: { association: 'stories'}
        });
        
        if(!hero){
            return res.status(404).json({error:'Hero not found'})
        }

        return res.json(hero.stories)
    },

    async store(req, res) {
        const {hero_id} = req.params;
        const {name,author,fan_did} = req.body

        if(!name | !author | fan_did == undefined){
            return res.status(404).json({error:'Error creating storie.Please check the fields.'});
        }

        const hero = await Hero.findByPk(hero_id);

        if(!hero){
            return res.status(404).json({error:'Hero not found'});
        }

        const storie = await Storie.create({
            name,
            author,
            fan_did,
            hero_id
        })

        return res.json(storie)
    }
};