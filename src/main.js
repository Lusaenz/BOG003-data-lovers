import{ordenarPorPuntaje,filtroLoMasPro,filtroLoMenosPro}from'./data.js';
import data from './data/ghibli/ghibli.js';


// Ordenar peliculas por puntaje
let peliculas = ordenarPorPuntaje(data.films);

const menuInicio = document.getElementById("inicio")
const rankingPeliculas = document.getElementById("item");
const menuDesplegable = document.getElementById("desple");
const menuTodo = document.querySelector(".todo");
const menuLoMasTop = document.querySelector(".altopuntaje");
const menuLoMenosTop = document.querySelector(".bajopuntaje");
const primeraPagina = document.querySelector(".primerapagina");
const segundaPagina = document.querySelector(".segundapagina");
const titulo = document.querySelector("#titulo");
const terceraPagina = document.querySelector(".tercerapagina");

rankingPeliculas.addEventListener("click", function () {
  menuDesplegable.classList.toggle("mostrar");
});
function mostrarPrimeraPagina() {
  segundaPagina.classList.remove("mostrar");
  primeraPagina.classList.remove("esconder");
  terceraPagina.classList.remove("esconder");
  titulo.classList.add("esconder");
}
function mostrarSegundaPagina() {
  segundaPagina.classList.add("mostrar");
  primeraPagina.classList.add("esconder");
}
function mostrarTerceraPagina() {
  segundaPagina.classList.remove("esconder");
  primeraPagina.classList.remove("esconder");
  terceraPagina.classList.remove("mostrar");
  titulo.classList.add("esconder");
  
}

function mostrarPosters(peliculas, textoTitulo) {
  titulo.innerText = textoTitulo;

  // Limpiar segunda pagina
  segundaPagina.innerHTML = "";

  peliculas.forEach((pelicula) => {
    const poster = document.createElement("IMG");
    const nombrePelicula = document.createElement("p");
    const calificacionPelicula = document.createElement("h2");
    calificacionPelicula.innerHTML=pelicula.rt_score;
    calificacionPelicula.setAttribute("class","puntaje");
    nombrePelicula.setAttribute("class","titulopelicula");
    nombrePelicula.innerHTML = pelicula.title;
    poster.setAttribute("src", pelicula.poster);
    poster.addEventListener("click",() =>{
      segundaPagina.style.display="none";
      terceraPagina.style.display="block";
      titulo.style.display="none";
      contenedorTerceraPagina(pelicula);
    })
    document.querySelector(".segundapagina").appendChild(poster);
    document.querySelector(".segundapagina").appendChild(nombrePelicula);
    document.querySelector(".segundapagina").appendChild(calificacionPelicula);
  });
}
 
menuInicio.addEventListener("click", () => {
  mostrarPrimeraPagina();
});
menuTodo.addEventListener("click", () => {
  mostrarSegundaPagina();
  mostrarPosters(peliculas, "Todo");
 
});

menuLoMasTop.addEventListener("click", () => {
  mostrarSegundaPagina();
  let topPeliculas = filtroLoMasPro(peliculas);
  mostrarPosters(topPeliculas, "Lo mas top");
});

menuLoMenosTop.addEventListener("click", () => {
  mostrarSegundaPagina();
  let loMenosTopPeliculas = filtroLoMenosPro(peliculas);
  mostrarPosters(loMenosTopPeliculas, "Lo menos top");
});
terceraPagina.addEventListener("click",() => {
  mostrarTerceraPagina
});
 // Limpiar tercera pagina
 terceraPagina.innerHTML = "";

function contenedorTerceraPagina(pelicula){
  const poster = document.createElement("IMG");
  poster.setAttribute("src", pelicula.poster);
  const nombrePelicula = document.createElement("h3");
  nombrePelicula.innerHTML = pelicula.title;
  nombrePelicula.setAttribute("class","titulopeli");
  const calificacionPelicula = document.createElement("h4");
  calificacionPelicula.innerHTML = pelicula.rt_score;
  calificacionPelicula.setAttribute("class","calificacion");
  const sinopsis = document.createElement("p");
  sinopsis.innerHTML = pelicula.description;
  sinopsis.setAttribute("class","sinopsis");
  const director = document.createElement("h4");
  director.innerHTML = pelicula.director;
  director.setAttribute("class","director");
  const productor = document.createElement("h4");
  productor.innerHTML = pelicula.producer;
  productor.setAttribute("class","productor");
  const lanzamiento = document.createElement("h4");
  lanzamiento.innerHTML = pelicula.release_date;
  lanzamiento.setAttribute("class","lanzamiento");

  document.querySelector(".tercerapagina").appendChild(poster);
  document.querySelector(".tercerapagina").appendChild(nombrePelicula);
  document.querySelector(".tercerapagina").appendChild(calificacionPelicula);
  document.querySelector(".tercerapagina").appendChild(lanzamiento);
  document.querySelector(".tercerapagina").appendChild(director);
  document.querySelector(".tercerapagina").appendChild(productor);
  document.querySelector(".tercerapagina").appendChild(sinopsis);
}
