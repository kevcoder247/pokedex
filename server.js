const express = require('express');
const pokemon = require('./models/pokemon');
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

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
