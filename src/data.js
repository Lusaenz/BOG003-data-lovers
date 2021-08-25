
export const ordenarPorPuntaje = function (peliculas) {
  return peliculas.sort((peliculaA, peliculaB) => {
    if (parseInt(peliculaA.rt_score) < parseInt(peliculaB.rt_score)) {
      return 1;
    }
    if (parseInt(peliculaA.rt_score) > parseInt(peliculaB.rt_score)) {
      return -1;
    }
    return 0;
  });
};

export const filtroLoMasPro = function (peliculas) {
  return peliculas.filter((pelicula) => {
    return pelicula.rt_score >= 85;
  });
};

export const filtroLoMenosPro = function (peliculas) {
  return peliculas.filter((pelicula) => {
    return pelicula.rt_score < 85;
  });
};