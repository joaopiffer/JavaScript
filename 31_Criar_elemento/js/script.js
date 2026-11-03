// Inserir elemento no BOdy
const novoParagrafo = document.createElement("p")

let texto = document.createTextNode("Este é o conteúdo do novo parágrafo")

console.log(novoParagrafo)

novoParagrafo.appendChild(texto)

const body = document.querySelector("body")

body.appendChild(novoParagrafo)

// inserir em um conteiner

let conteiner = document.getElementById('conteiner')

console.log(conteiner)

let elemn = document.createElement('span')

elemn.appendChild(document.createTextNode('texto do span'))

console.log(elemn)

conteiner.appendChild(elemn)