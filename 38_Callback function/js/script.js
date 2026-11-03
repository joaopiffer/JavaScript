function exibir (nm) {
    console.log("O resultado é:", nm )
}

function soma (a, b, callback) {
    let op = a + b
    callback(op)
}

function multiplicacao (a, b, cb) {
    let op = a * b
    cb(op)
}

soma(2, 3, exibir)
multiplicacao(2, 
    3, exibir)