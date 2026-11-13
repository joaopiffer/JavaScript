const objs = [
    {
    nome: "João",
    idade: 19,
    esta_trabalhando: true,
    detalhes_profissao: {
        "profissão": "programador",
        "empresa": "Piffer consorcios"
    },
    hobbies: ["jgar", 54, "Programar", true]
},
{
    nome: "Cleber",
    idade: 38,
    esta_trabalhando: false,
    detalhes_profissao: null,
    hobbies: ["jgar", 54, "Programar", true]
}
]

console.log(objs)
console.log(typeof objs)

// JSON
// converter objeto para Json
const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

// converter o json para objeto
const objData = JSON.parse(jsonData)

console.log(typeof objData)