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
function ocultarSecciones() {
   document.querySelectorAll(".seccion").forEach((seccion)=>{
    seccion.classList.add("esconder");
  });
  titulo.classList.add("esconder");
}
function mostrarPrimeraPagina() {
  ocultarSecciones()
  primeraPagina.classList.remove("esconder");
}
function mostrarSegundaPagina() {
  ocultarSecciones()
  segundaPagina.classList.remove("esconder");
  titulo.classList.remove("esconder");
}
function mostrarTerceraPagina() {
  ocultarSecciones()
  terceraPagina.classList.remove("esconder");
  
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
      mostrarTerceraPagina()
      contenedorTerceraPagina(pelicula);
    })
    segundaPagina.appendChild(poster);
    segundaPagina.appendChild(nombrePelicula);
    segundaPagina.appendChild(calificacionPelicula);
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
 
function contenedorTerceraPagina(pelicula){
  terceraPagina.innerHTML = "";
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

  terceraPagina.appendChild(poster);
  terceraPagina.appendChild(nombrePelicula);
  terceraPagina.appendChild(calificacionPelicula);
  terceraPagina.appendChild(lanzamiento);
  terceraPagina.appendChild(director);
  terceraPagina.appendChild(productor);
  terceraPagina.appendChild(sinopsis);
}
