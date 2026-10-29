console.log(this)

alert("Isso é um POp-up para a página de Web")
console.log()

let pessoa = {
    nome: 'João',
    idade: 19,
    falar: function() {
        console.log('Olá, tudo bem? Eu me chamo ' + this.nome)
    },
    aniversario: function() {
        this.idade ++
    },
}

pessoa.falar()

console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)

function parabens() {
    console.log("Parabéns, " + pessoa.nome + '!')
}

parabens()