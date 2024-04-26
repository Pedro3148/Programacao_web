const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    let nome = 'Pedro';
    res.render('index.html', {nome});
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});