const { store, index } = require("./HeroController");

const Serie = require('../models/Serie')
const Hero = require('../models/Hero')

module.exports = {
    async index(req, res){
        const {hero_id} = req.params;

        const hero = await Hero.findByPk(hero_id,{
            include: { association: 'series'}
        });
        
        if(!hero){
            return res.status(404).json({error:'Hero not found'})
        }

        return res.json(hero.series)
    },

    async store(req, res) {
        const {hero_id} = req.params;
        const {name,director,season_numbers} = req.body

        if(!name | !director | !season_numbers){
            return res.status(404).json({error:'Error creating serie.Please check the fields.'});
        }

        const hero = await Hero.findByPk(hero_id);

        if(!hero){
            return res.status(404).json({error:'Hero not found'});
        }

        console.log('passou daqui')

        const serie = await Serie.create({
            name,
            director,
            season_numbers,
            hero_id
        })

        return res.json(serie)
    }
};