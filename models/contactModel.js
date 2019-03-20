const mongo = require('mongojs');
const db = mongo('express',['info']);


const mongodb = {
    mongo: mongo,
    db: db
};

module.exports = mongodb;