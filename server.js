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

//NEW=================================================
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
})



//CREATE==============================================

//SHOW================================================
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]} )
})






//EDIT================================================



//UPDATE===============================================

//DESTROY==============================================












//CHECK IF APP IS LISTENING===========================
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
