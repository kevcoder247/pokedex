const express = require('express');
const methodOverride = require("method-override")
const pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000;

//link CSS
app.use(express.static(__dirname + '/public'));

//MIDDLEWARE=======================================
app.use(express.urlencoded({ extended: false }));
//Allows delete button to works
app.use(methodOverride("_method"))

//Index=============================================
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon});
})

//NEW=================================================
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
})

//DESTROY==============================================
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect('/pokemon')
})

//UPDATE===============================================
app.get('/pokemon/:id/edit', (req, res) => {
    res.render(
        "edit.ejs", 
        {
          pokemon: pokemon[req.params.id],
          index: req.params.id  
        }
    )
})

//CREATE==============================================
app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    console.log(req.body);
    res.redirect('/pokemon')
})

//SHOW================================================
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]} )
})


//EDIT================================================
app.put('/pokemon/:id', (req, res) => {
    pokemon[req.params.id] = req.body
    res.redirect('/pokemon')
})


//CHECK IF APP IS LISTENING===========================
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
