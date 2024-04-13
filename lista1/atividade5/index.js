const express = require('express');
const estoque = require('./src/estoque.js');
const app = express();

app.get('/', (req, res) => {
    res.send("Controle de Estoque");
});

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    let produto = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(produto);
    res.send("Produto adicionado com sucesso");
});

app.get('/listar', (req, res) => {
    res.send(estoque.listarEstoque());
});

app.get('/remover/:id', (req, res) => {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(`Produto de id: ${id} removido com sucesso`);
});

app.get('/editar/:id/:qtd', (req, res) => {
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editarProduto(id, qtd);
    res.send('Produto atualizado com sucesso');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na Porta: ${PORT}`)
});