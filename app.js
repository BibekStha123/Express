const express = require('express');
const app = express();
const contactRouter = require('./router/contactRouter');

const bodyParser = require('body-parser');




const staticDirs=[
    '/node_modules/bootstrap/dist/js',
    '/node_modules/bootstrap/dist/css',
    '/node_modules/jquery/dist',
    '/public'
];

staticDirs.forEach(function(dir){
    
    app.use(express.static(__dirname+dir));

});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use('/', contactRouter);
app.use('/api/post', contactRouter);
app.use('/api/edit/:bc', contactRouter);
app.use('/api/delete/:a', contactRouter);


app.listen(3002, function(err){
    if(err){
        console.log(err);
    }
    console.log("running on 3002");
});