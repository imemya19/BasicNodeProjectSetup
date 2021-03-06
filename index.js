const express = require('express');
const ejs = require('ejs');

const port = 3000;
const app = express();

//to be able to include partials and layouts
const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

//use assets folder for all static content
app.use(express.static('./assets'));
//Remember to keep layout declaration before route declaration!!
app.use(expressLayouts);

//extract style and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//use=>middleware , use express router
app.use('/', require('./routes'));

//set up ejs as template engine
app.set('view engine', 'ejs');
app.set('views', './views');



//listen to the port
app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
});