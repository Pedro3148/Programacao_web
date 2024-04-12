function somar(a, b) {
    return Number(a) + Number(b);
}

function subtrair(a, b) {
    return Number(a) - Number(b);
}

function multiplicar(a, b) {
    return Number(a) * Number(b);
}

function dividir(a, b) {
    if (b == 0) {
        return "Impossivel dividir por zero"
    }
    return Number(a) / Number(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};
