// inserir click

const btn = document.querySelector('#btn')

console.log(btn)

btn.addEventListener("click", function() {
    console.log("clicou")
    console.log(this)
    this.style.color = "red"

})
 // inserindo click, não necessáriamente em um botão

 const title = document.querySelector("#title")

 title.addEventListener("click", function() {

    console.log("clicou")

    let subtitle = document.querySelector(".subtitle")
    subtitle.style.cssText = "color: blue; background-color: black; text-align: center; transition: text-align .5s"

 })

 // double click

var subtitle = document.querySelector('.subtitle')

subtitle.addEventListener("dblclick", function() {

    alert('você deu um double click')


})