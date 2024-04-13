let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const transporMatriz = (A) => {
    let matrizTransposta = [];
    const linhas = A.length;
    const colunas = A[0].length;

    for (let coluna = 0; coluna < colunas; coluna++) {
        let array = []

        for (let linha = 0; linha < linhas; linha++) {
            array.push(A[linha][coluna]);
        }
        matrizTransposta.push(array);
    }
    return matrizTransposta;
}

console.log(matriz)
console.log(transporMatriz(matriz));