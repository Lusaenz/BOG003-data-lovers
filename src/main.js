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
const peliculasOrdenadas = (listaPeliculas)=>{

//console.log(listaPeliculas[0].poster);
listaPeliculas.forEach((pelicula)=>{
  let poster = document.createElement("IMG");
  poster.setAttribute("src",pelicula.poster);
  document.querySelector(".segundapagina").appendChild(poster);

});
}

const altopuntaje = document.getElementById('altopuntaje');
altopuntaje.addEventListener("click", function(){
let dataordenada = ordenarData(data);
peliculasOrdenadas(dataordenada);
});

ordenarData(listaPeliculas);

/*for (let i = 0; i < listaPeliculas.length; i++) {
  let poster = document.createElement("IMG");
  poster.setAttribute("src", listaPeliculas[i].poster);
  document.querySelector(".segundapagina").appendChild(poster);
}*/
