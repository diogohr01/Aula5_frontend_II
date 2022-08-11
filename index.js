let btn = document.querySelector('.btn')
let body = document.querySelector('.dark')
let h1 = document.querySelector('h1')
let item = document.querySelectorAll('.item')
let h2 = document.querySelectorAll ('h2')
let p = document.querySelectorAll('p')

btn.onclick = function (){

 this.classList.toggle('active')
 
 body.classList.toggle('body-novo')
 
 h1.classList.toggle('h1-novo')

 h2.forEach((h) => {
h.classList.toggle('h2-novo')})
 
item.forEach((t) => {
t.classList.toggle('item-novo')
})
p.forEach((pnovo)=> {
pnovo.classList.toggle('active')
})
}