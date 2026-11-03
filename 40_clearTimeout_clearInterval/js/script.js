// clearTImeout
const myTimer = setTimeout(function(){
    console.log('o x vale 0')
},1000)

let x = 5

if (x > 5) {
    clearTimeout(myTimer)
    console.log('O x vale mais do que 0')
}

// clearInterval
const myInterval = setInterval(function() {
    console.log('Imprimindo interval')
}, 500)

setInterval(function() {

    clearInterval(myInterval)

},5000)


