import { ordenarData,filtroLoMasPro } from './data.js';
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