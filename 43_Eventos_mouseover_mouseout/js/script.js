// evento de mouseover

const title = document.querySelector('#title')

title.addEventListener('mouseover', function(){

    this.style.backgroundColor = 'red';

})


// evento de mouseout

title.addEventListener('mouseout', function(){

    title.style.backgroundColor = "white"

})

// afetar outro elemento com mouseover 

let subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('mouseover', function() {

    let hide = document.querySelector("#hide")

    hide.style.display = "block"

})