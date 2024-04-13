const express = require('express');
const { somar, subtrair, multiplicar, dividir } = require('./util/calculadora.js'); // Importe as funções de cálculo
const app = express();

app.get('/', (req, res) => {
    res.send('Calculadora');
});

app.get('/somar/:a/:b', (req, res) => {
    const a = req.params.a;
    const b = req.params.b;
    const resultado = somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = req.params.a;
    const b = req.params.b;
    const resultado = subtrair(a, b);
    res.send(`${a} - ${b} = ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = req.params.a;
    const b = req.params.b;
    const resultado = multiplicar(a, b);
    res.send(`${a} * ${b} = ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = req.params.a;
    const b = req.params.b;
    const resultado = dividir(a, b);
    res.send(`${a} / ${b} = ${resultado}`);
});

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
