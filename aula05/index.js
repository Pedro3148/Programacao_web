const express = require('express');
const estoque = require('./src/estoque.js')
const app = express();

// MCV
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    let novoProduto = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(novoProduto);
    res.send(novoProduto);
});

app.get('/listaDeProdutos', (req, res) => {
    res.send(estoque.listarProduto());
});

app.get('/removerProduto/:id', (req, res) => {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(`Produto de id: ${id} removido`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor Rodando na Porta: ${PORT}`)
});