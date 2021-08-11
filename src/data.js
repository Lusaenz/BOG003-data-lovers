// estas funciones son de ejemplo

export {ordenarData}
//let arrAux=[]
    //let dataOrdenada = data.rt_score
    function ordenarData(data){

  let arrAux = data.sort((a, b) => {
      if (parseInt(a.rt_score) < parseInt(b.rt_score) ){
        return -1;
      }
      if (parseInt(a.rt_score) > parseInt(b.rt_score) ){
        return 1;
      }
      return 0;
    });

    //return arrAux;
    console.log(arrAux);
}
//export const anotherExample = () => {
//  return 'OMG';
//};
