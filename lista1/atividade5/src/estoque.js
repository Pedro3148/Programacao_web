let produtos = [];

const criarProduto = (id, nome, qtd) => {
    let produto = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return produto;
}

const adicionarProduto = (produto) => {
    produtos.push(produto);
}

const listarEstoque = () => {
    return produtos;
}

const removerProduto = (id) => {
    produtos = produtos.filter((produto) => {
        return produto.id != id;
    });
}

const editarProduto = (id, qtd) => {
    for (let produto of produtos) {
        if (produto.id == id)
            produto.qtd = qtd;
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarEstoque,
    removerProduto,
    editarProduto
}