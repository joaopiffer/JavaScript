let pessoa = {
    nome: 'João',
    idade: 19,
    falar: function fala() {
        console.log('Olá, tudo bem?')
    },
    soma: function soma(a, b) {
        return a + b
    }
}

console.log(pessoa.nome)

pessoa.falar()

let soma = pessoa.soma(3, 5)
console.log(soma)
