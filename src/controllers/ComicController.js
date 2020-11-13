const { store, index } = require("./HeroController");

const Comic = require('../models/Comic')
const Hero = require('../models/Hero')

module.exports = {
    async index(req, res){
        const {hero_id} = req.params;

        const hero = await Hero.findByPk(hero_id,{
            include: { association: 'comics'}
        });
        
        if(!hero){
            return res.status(404).json({error:'Hero not found.'})
        }

        return res.json(hero.comics)
    },

    async store(req, res) {
        const {hero_id} = req.params;
        const {name,author,publisher} = req.body

        if(!name | !author | !publisher){
            return res.status(404).json({error:'Error creating comic.Please check the fields.'});
        }

        const hero = await Hero.findByPk(hero_id);

        if(!hero){
            return res.status(404).json({error:'Hero not found.'});
        }

        const comics = await Comic.create({
            name,
            author,
            publisher,
            hero_id
        })

        return res.json(comics)
    }
};