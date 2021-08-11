import { ordenarData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example(data./films));


const rankingPeliculas = document.getElementById('item');
rankingPeliculas.addEventListener("click", function(){
const desple = document.getElementById('desple');
desple.classList.toggle("mostrar")
});

let listaPeliculas = data.films;
//console.log(listaPeliculas[0].poster);
listaPeliculas.forEach((pelicula)=>{
  let poster = document.createElement("IMG");
  poster.setAttribute("src",pelicula.poster);
  document.querySelector(".segundapagina").appendChild(poster);

});

ordenarData(listaPeliculas);

/*for (let i = 0; i < listaPeliculas.length; i++) {
  let poster = document.createElement("IMG");
  poster.setAttribute("src", listaPeliculas[i].poster);
  document.querySelector(".segundapagina").appendChild(poster);
}*/
