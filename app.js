let express = require('express');
let app = express();
const PORT = 3030;
let path = require('path');
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`
    Server Successfully Started at:
    http://localhost:${PORT}/
    Listening to Port: ${PORT}`)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, './views/babbage.html'))
});
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, './views/berners-lee.html'))
});
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './views/clarke.html'))
});
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hamilton.html'))
});
app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hopper.html'))
});
app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, './views/lovelace.html'))
});
app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, './views/turing.html'))
});