const express = require('express');
const router = express.Router();
const controller = require('../controller/contactController');



router.get('/', function (req, res) {

   controller.view(req, res);
});

router.get('/api/json', function(req,res){
    controller.viewJson(req,res);
});

router.post('/api/post', function (req, res) {
    controller.add(req, res);
});

router.put('/api/edit/:bc', function (req, res) {

    controller.edit(req, res);

});

router.delete('/api/delete/:a', function (req, res) {
    
    controller.delete(req, res);
});


module.exports = router;
