import { ordenarData, ordenarDataAz } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example(data./films));


const rankingPeliculas = document.getElementById('item');
rankingPeliculas.addEventListener("click", function () {
  const desple = document.getElementById('desple');
  desple.classList.toggle("mostrar")
});

let listaPeliculas = ordenarData(data.films);

let listaOrdenada = ordenarDataAz(data.films);

mostrar(listaPeliculas);

// Funcion para mostrar portadas
function mostrar(peliculas) {
  document.querySelector(".segundapagina").innerHTML = "";
  peliculas.forEach((pelicula) => {
    let poster = document.createElement("IMG");
    poster.setAttribute("src", pelicula.poster);
    document.querySelector(".segundapagina").appendChild(poster);

  });
}
