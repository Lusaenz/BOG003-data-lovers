// estas funciones son de ejemplo

export {ordenarData}
//let arrAux=[]
    //let dataOrdenada = data.rt_score
  function ordenarData(data){
  let arrAux = data.sort((a, b) => {
      if (parseInt(a.rt_score) < parseInt(b.rt_score) ){
        return 1;
      }
      if (parseInt(a.rt_score) > parseInt(b.rt_score) ){
        return -1;
      }
      return 0;
    });
    //console.log(arrAux);
    return arrAux;
    
}
export {filtroLoMasPro}
function filtroLoMasPro(mayorPuntaje){
  let resultado = mayorPuntaje.filter(item=>{
    return item.rt_score >=80;
    });
    return resultado;
}


export { filtroLoMenosPro }
function filtroLoMenosPro(peliculas) {
  let resultado = peliculas.filter((pelicula) => {
    return pelicula.rt_score < 80;
  });
  return resultado;
}
/*export const ordenAcendente = function(data){
  return data.sort((a,b)=>a.)
}*/
//export const anotherExample = () => {
//  return 'OMG';
//};
