//buscando os elementos

const btn = document.querySelector('.btn')
const body = document.querySelector('.dark')
const h1 = document.querySelector('h1')
const item = document.querySelectorAll('.item')
const h2 = document.querySelectorAll ('h2')
const p = document.querySelectorAll('p')

//botão

btn.onclick= function (){

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


//NOVO EXERCICIO
/*const cards  = [
    { 
       titulo : "o tigre",
       img : "./imagens/tiger.jpg" ,
       post :" O tigre (Panthera tigris) é uma das espécies da subfamília Pantherina e (família Felidae)pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predadorcarnívoro e é a maior espécie de felino do mundo junto com o leão."
   },
     {
       titulo : "o leao",
       img : "./imagens/leon.jpg",
       post : "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia."
   }, 
   {
       titulo: "o leopardo",
       img: "./imagens/leopardo.jpg",
       post: " O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso  hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista)"
   },
   {
       titulo : "a pantera negra",
       img: "./imagens/pantera-negra.jpg",
       post: "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca).Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais."
   },
   {
       titulo: "o jaguar",
       img : "./imagens/jaguar.jpg",
       post : " O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo)."

   },
   {
      titulo : "o guepardo",
      img: "./imagens/chita.jpg",
      post: " O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre  mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros"
   }
]
let container = document.querySelector('.container')

let soma = "";
for(let item of cards){
soma += `<div class="item">
<img src=${item.img}>
<h2>${item.titulo}</h2>
<p>${item.post}</p></div>`
}

container.innerHTML = soma
*/

//novo exercicio






let button = document.createElement("button")
let descricao = document.createTextNode("Trocar imagem")
button.appendChild(descricao)



item.forEach((i)=>{
i.innerHTML += `<button>${button.innerHTML}</button>`})

let imgs = document.querySelectorAll("img")
let myArray = Array.from(imgs);


document.querySelectorAll('button').forEach(b=>{
b.addEventListener('click', () =>{
 let apertar= prompt("Informe a imagem que deseja mudar iniciando do 0.")
if(apertar==null){}
else if(apertar<myArray.length){
    let escolhaUser = prompt("URL da imagem:");
    if(escolhaUser!="" && escolhaUser !=null){
        myArray[apertar].setAttribute("src",escolhaUser);
    }else{
        alert("Imagem não alterada!");}}
    else{
    alert("Posição Inválida");}


})})

