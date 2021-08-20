import { ordenarPorPuntaje, filtroLoMasPro, filtroLoMenosPro } from "./data.js";
import data from "./data/ghibli/ghibli.js";

// Ordenar peliculas por puntaje
let peliculas = ordenarPorPuntaje(data.films);

const rankingPeliculas = document.getElementById("item");
const menuDesplegable = document.getElementById("desple");
const menuTodo = document.querySelector(".todo");
const menuLoMasTop = document.querySelector(".altopuntaje");
const menuLoMenosTop = document.querySelector(".bajopuntaje");
const primeraPagina = document.querySelector(".primerapagina");
const segundaPagina = document.querySelector(".segundapagina");
const titulo = document.querySelector("#titulo");

rankingPeliculas.addEventListener("click", function () {
  menuDesplegable.classList.toggle("mostrar");
});

function mostrarSegundaPagina() {
  segundaPagina.classList.add("mostrar");
  primeraPagina.classList.add("esconder");
}

function mostrarPosters(peliculas, textoTitulo) {
  titulo.innerText = textoTitulo;

  // Limpiar segunda pagina
  segundaPagina.innerHTML = "";

  peliculas.forEach((pelicula) => {
    const poster = document.createElement("IMG");
    poster.setAttribute("src", pelicula.poster);
    document.querySelector(".segundapagina").appendChild(poster);
  });
}

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
