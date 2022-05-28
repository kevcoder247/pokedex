const express = require('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000;

//link CSS
app.use(express.static(__dirname + '/public'));

//MIDDLEWARE=======================================
app.use(express.urlencoded({ extended: false }));

//Index=============================================
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon});
})

//SHOW================================================
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]} )
})




//NEW=================================================

//EDIT================================================

//CREATE==============================================

//UPDATE===============================================

//DESTROY==============================================












//CHECK IF APP IS LISTENING===========================
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
