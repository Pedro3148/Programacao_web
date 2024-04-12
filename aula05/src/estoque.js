let produtos = []

const criarProduto = (id, nome, qtd) => {
    let produto = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return produto;
};

const adicionarProduto = (produto) => {
    produtos.push(produto);
};

function removerProduto(id){
    produtos = produtos.filter((produto) => {
        return produto.id != id;
    });
};

const listarProduto = () => {
    return produtos;
};


module.exports = {
    criarProduto,
    adicionarProduto,
    listarProduto,
    removerProduto
}