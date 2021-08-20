import { ordenarData,filtroLoMasPro,filtroLoMenosPro } from './data.js';
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

function mostrarPoster(arrpeliculas){
  document.querySelector(".segundapagina").innerHTML="";
   arrpeliculas.forEach((pelicula)=>{
    let poster = document.createElement("IMG");
    poster.setAttribute("src", pelicula.poster);
    document.querySelector(".segundapagina").appendChild(poster);
  
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
menuBajoPuntaje.addEventListener("click", () => {
  let segundaPagina = document.querySelector(".segundapagina");
  
  document.querySelector(".primerapagina").classList.add("esconder");
  segundaPagina.style.display="block";

  segundaPagina.innerHTML = "";
  let titulo = document.createElement("h1");
  titulo.innerText = "Lo menos top";
  segundaPagina.appendChild(titulo);

  let loMenosTop = filtroLoMenosPro(listaPeliculas);

  mostrarPoster(loMenosTop)
});
