// length

var nome = 'João'
console.log(nome.length)

// indexOf

console.log(nome[2])
var frase = "o rato roeu a roupa do rei de Roma"
console.log(frase.indexOf('roeu'))

// slice

var roeu = frase.slice(7, 11)
console.log(roeu)

// replace

var novaFrase = frase.replace("roeu", "teste")
console.log(novaFrase)

// to LowerCase e toUpperCase

var frase = "Esta é a frase que nós vamos manipular"
var fraseCaixaAlta = frase.toUpperCase()
console.log(fraseCaixaAlta)
console.log(fraseCaixaAlta.toLowerCase())

// trim

var nome2 = "         José         "
var nomeTrim = nome2.trim()

console.log(nome2)
console.log(nomeTrim)

// split

var tags = "javascript, Java, python, Ia, HTML5, CSS"
console.log(tags.split(", "))

//lastIndexOf

var fraseDois = "Essa é a segunda frase de teste para achar a palavra teste"

console.log(fraseDois.indexOf("teste"))
console.log(fraseDois.lastIndexOf("teste"))