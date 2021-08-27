import {ordenarPorPuntaje,filtroLoMasPro,filtroLoMenosPro} from '../src/data.js';

let dataPeliculas = [
  {
    "rt_score": "100",
   },
   
  {
   "rt_score": "95",
  },
  {
    "rt_score": "100",
   },
  {
    "rt_score": "93",
  },

]

describe(ordenarPorPuntaje, () => {
  it('is a function', () => {
    expect(typeof ordenarPorPuntaje ).toBe('function');
  });

let dataOrdenada = [
  {
    "rt_score": "100",
   },
   {
    "rt_score": "100",
   },
  {
   "rt_score": "95",
  },
  
  {
    "rt_score": "93",
  },
  ]

  it('OrdenarPorPuntaje deberia organizar las calificacion de forma ascendente', () => {
    expect(ordenarPorPuntaje(dataPeliculas)).toStrictEqual(dataOrdenada);
  });
});

let filtroMayorPuntaje = [

  {
   "rt_score": "100",
  },
  {
    "rt_score": "97",
  },
  {
    "rt_score": "41",
  },
  {
    "rt_score": "93",
  },
  ]

describe(filtroLoMasPro, () => {
  it('is a function', () => {
    expect(typeof filtroLoMasPro).toBe('function');
  });

let filtoImplementado=[
  {
   "rt_score": "100",
  },
  {
   "rt_score": "97",
  },
  {
   "rt_score": "93",
  },
  ]
  
  it('FiltroLoMasPro debera filtrar solo las calificaciones mas altas', () => {
    expect(filtroLoMasPro(filtroMayorPuntaje)).toStrictEqual(filtoImplementado);
  });
});
let filtroMenorPuntaje=[
  { "rt_score": "100", },
  { "rt_score": "93", },
  {     "rt_score": "41",   },
  {     "rt_score": "83",   },
  {     "rt_score": "75",   },
  {     "rt_score": "78",   }, 
  
  ]
  describe(filtroLoMenosPro, () => {
    it('is a function', () => {
      expect(typeof filtroLoMenosPro).toBe('function');
    });
let filtroImpleMenor=[
  {     "rt_score": "41",   },
  {     "rt_score": "83",   },
  {     "rt_score": "75",   },
  {     "rt_score": "78",   },   
  ]
    it('FiltroLoMenosPro debera filtrar solo las calificaciones bajas', () => {
      expect(filtroLoMenosPro(filtroMenorPuntaje)).toStrictEqual(filtroImpleMenor);
    });
    });