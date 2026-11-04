// keydown

document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        alert("Você apertou o enter")
    }

})

// keyup

document.addEventListener('keyup', function(e) {

    if (e.key === '5') {

        alert('Você soltou o 5')
    }

})