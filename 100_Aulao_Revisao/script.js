 // Console
console.error("Esse é um erro")
console.warn("Esse é um aviso")
console.log("Isso é uma mensagem")

// variáveis
var x = 10
//maneiras mais modernas 
let y = 5
const z = 3

if(1) {
    const z = 55
    console.log(z)
}

console.log(z)
console.log(y)
y = 23
console.log(y)
 
// tipos de dados

const name = "João"
console.log(typeof name)

const shirtsQty = 4.9
console.log(typeof shirtsQty)

const isApproved = false // true ou false 
console.log(typeof isApproved)

let surname = null
console.log(typeof surname)

surname = "piffer"
console.log(typeof surname)

let age 
console.log(typeof age)

const languages = ["python ", "Java", "Ruby", "C++"]
console.log(typeof languages)

const user = {
    nome: "João",
    email: "jprpiffer07@gmail.com",
    password: "piffer1234567"

}
console.log(typeof user)

//metodos de string

const fullName = "João Piffer"

console.log(fullName.length)

const fullNameToArray = fullName.split(' ')
console.log((fullNameToArray))

console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())

console.log(fullName.indexOf('Piffer'))
console.log(fullName.slice(0, 4))

// métodos de array

const lista = ["a", "b", "c", "d"]

console.log(lista.length)
console.log(lista[2])

lista[4] = 'e'
console.log(lista)

console.log(lista[lista.length - 1])

lista.push("f")
console.log(lista)

lista.pop()
console.log(lista)

lista.shift()
console.log(lista)

lista.unshift("a")
console.log(lista)

// objetos
const product = {
    name: "T-shirt",
    price: 19.99,
    stock: true,
    size: ["M", "P", "GG"]
}

console.log(product.name)

// destrocturing (Criar variáveis dos objetos e arrays)

const {price, stock} = product

console.log(price)
console.log(stock)

const [n1, n2] = lista

console.log(n1)
console.log(n2)

// JSON (JavaScript Object Notation)
const dog = {
    name: "Sergio",
    age: 12
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)
console.log(obj)


// Estruturas condicionais 

const a = 10

if( a > 8) {

    console.log("A é maior que 8")
}

const b = "Pedro"

if(b === "João") {
    console.log("O seu nome é João")
} else if(b === "Pedro") {
    console.log("O seu nome é Pedro")
} else {
    console.log("O seu nome não é João, nem Pedro")
}

const someNumber = 14

// if tenario
const testingANumber = someNumber < 20 ? true : false

console.log(testingANumber)

// Estruturas de Repetição

const myList = [1, 2, 3, 4 ,5]
let counter = 0

while(counter < myList.length) {
    console.log("Número: " + myList[counter])
    counter++
}

const list2 = [1, 2, 3, 4, 5]

for(let x = 0; x < list2.length; x++) {
    console.log(`N: ${list2[x]}`) // template literals
}

// Métodos de arrmay -> repetição

const names = ["José", "Larson", "Wesley", "Andrey"]
names.forEach(function(name){
    console.log(`Nome: ${name}`)
})


const modifiedNames = names.map(function(name){

    if(name === 'José') {
        return (name = 'Sr. José')
    } else {
        return (name)
    }
})

console.log(modifiedNames)


const bigNumbers = [1, 2, 3, 4, 5, 6 ].filter(function(number){
    return number > 3
})

console.log(bigNumbers)

const sumAll = [10, 20, 23, 30, 5].reduce(function(total, number){
    return total + number
})

console.log(sumAll)

// functions

function minhaFuncao() {
    console.log("função")
}

minhaFuncao()

function nomeCompleto(nome, sobrenome) {
    return(`Olá, ${nome} ${sobrenome}!`)
}

const firstName = "Jefferson"
const lastName = "da Silva"

console.log(nomeCompleto(firstName, lastName))
console.log(nomeCompleto("João", "Piffer"))