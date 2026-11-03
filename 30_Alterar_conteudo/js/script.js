// Selecionar elemento

const title = document.getElementById('title')

console.log(title)

// innerHTML

title.innerHTML = ("Testando o testo alterado")

//textContent (recomendado)

const subtitle = document.querySelector('.subtitle')

console.log(subtitle)

subtitle.textContent = 'Testando o textContent'
