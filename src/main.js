import{ordenarData,filtroLoMasPro,filtroLoMenosPro}from'./data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example(data./films));


const rankingPeliculas = document.getElementById("item");
rankingPeliculas.addEventListener("click", function(){
const desple = document.getElementById("desple");
desple.classList.toggle("mostrar")
});

let listaPeliculas = ordenarData(data.films);
//console.log(listaPeliculas[0].poster);
mostrarPoster(listaPeliculas);

//se  llama la data y se le agregan etiquetas de HTML para mostrar la informacion
function mostrarPoster(arrpeliculas){
  document.querySelector(".segundapagina").innerHTML="";
   arrpeliculas.forEach((pelicula)=>{
    let poster = document.createElement("IMG");
    let nombrePeliculas = document.createElement("p");
    nombrePeliculas.setAttribute("class","titulopeliculas")
    nombrePeliculas.innerHTML = pelicula.title;
    poster.setAttribute("src", pelicula.poster);
    document.querySelector(".segundapagina").appendChild(poster);
    document.querySelector(".segundapagina").appendChild(nombrePeliculas);

});

const bienvenida = document.querySelector(".primerapagina");
const loMasPro = document.querySelector(".altopuntaje");
const contenedorSegunaPagina = document.querySelector(".segundapagina");
loMasPro.addEventListener("click",()=>{
  contenedorSegunaPagina.style.display="block";
  bienvenida.classList.add("esconder");
  loMasPro.classList.remove("esconder");
  let mayorPuntaje = ordenarData(data.films);
  let arryLoMasPro = filtroLoMasPro(mayorPuntaje);

  mostrarPoster(arryLoMasPro);

});
}

let menuBajoPuntaje = document.querySelector(".bajopuntaje");
 menuBajoPuntaje.addEventListener("click",()=>{
 bienvenida.classList.add("esconder");
 contenedorSegunaPagina.style.display="block";

  contenedorSegunaPagina.innerHTML = "";
  let titulo = document.createElement("h1");
  titulo.innerText = "Lo menos top";
  contenedorSegunaPagina.appendChild(titulo);
  let loMenosTop = filtroLoMenosPro(listaPeliculas);

  mostrarPoster(loMenosTop);
});
