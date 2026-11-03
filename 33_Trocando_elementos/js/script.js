// criar um elemento

var el = document.createElement('h3')

el.classList = "h3-js"

const texto = document.createTextNode("Texto append")

el.appendChild(texto)

console.log(el)

// selecionando um elemento que quer trocar

const title = document.querySelector('#title')

// selecionar o pai do elemento 

const pai = title.parentNode

// trocar os elementos

pai.replaceChild(el, title)

