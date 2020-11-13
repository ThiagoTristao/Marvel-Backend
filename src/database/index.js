const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Hero = require('../models/Hero');
const Comic = require('../models/Comic');
const Serie = require('../models/Serie');
const Storie = require('../models/Storie');
const Event = require('../models/Event');

const connection = new Sequelize(dbConfig);

Hero.init(connection);
Comic.init(connection);
Serie.init(connection);
Storie.init(connection);
Event.init(connection);

Comic.associate(connection.models)
Hero.associate(connection.models)
Serie.associate(connection.models)
Storie.associate(connection.models)
Event.associate(connection.models)

module.exports = connection;