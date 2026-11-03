// criar elemento

let el = document.createElement('div')

el.classList = 'div-js'

console.log(el)

// adicionando elemento ao pai

const conteiner = document.querySelector("#conteiner")

conteiner.appendChild(el)

// inserBefore 

let el2 = document.createElement('div')

el2.classList = 'div-before'

conteiner.insertBefore(el2, el)