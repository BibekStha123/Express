const mongodb = require('../models/contactModel');

const db = mongodb.db;


module.exports.view = function(req, res){
    db.info.find({}).sort({ sno: 1 }, function (err, values) {
        if (err) {
            console.log(err);
        }
        res.render('index', {
            title: 'First express',
            contact: values
        });
    });
}

module.exports.viewJson = function(Req, res){
    db.info.find({}).sort({sno: 1}, function(err, data){
        res.json(data);
    });
}

module.exports.add = function(req, res){
    db.info.insert(req.body);
    res.redirect('/');
}

module.exports.edit= function(req, res){
    console.log('edit');
}

module.exports.delete= function(req, res){
    db.info.remove({ sno: req.params.a }, function (err) {
        if (err) {
            console.log(err);
        }
    });
}
