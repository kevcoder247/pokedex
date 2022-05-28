const express = require('express');
const app = express();
const port = 3000;

//link CSS
app.use(express.static(__dirname + '/public'));

//MIDDLEWARE=======================================
app.use(express.urlencoded({ extended: false }));

//Index=============================================
app.get('/', (req, res) => {
    res.send('ROOT CONNECTED');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
