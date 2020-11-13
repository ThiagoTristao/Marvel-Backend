const Hero = require('../models/Hero');

module.exports = {
    async indexHero(req, res){
        const {hero_id} = req.params;
        const hero = await Hero.findByPk(hero_id);

        if(!hero){
            return res.status(404).json({error:'Hero not found.'});
        };

        return res.json(hero);
    },
    
    async index(req,res){
        const heroes = await Hero.findAll();

        if(!heroes){
            return res.status(404).json({error:'no heroes found.'});
        }

        return res.json(heroes)
    },

    async store(req, res){
        const{name}= req.body;

        if(!name){
            return res.status(404).json({error:'Error creating hero.Please check the fields.'});
        }

        const hero = await Hero.create({name});

        if(!hero){
            return res.status(404).json({error:'Hero not found.'});
        }

        return res.json(hero);
    }
}