import { Injectable } from '@angular/core';


@Injectable()

export class VillanosService {
  private  Villanos: Villano[] = [
    {
      nombre: "Maléfica",
      bio: "Maléfica era la más horrible pesadilla para la Bella Durmiente. Lo tenía todo.",
      img: "assets/img/malefica.jpg",
      aparicion: "1941-11-01",
      casa:"Disney"
    },
    {
      nombre: "Scar",
      bio: "La familia... ¿qué tipo de tío te juega esa mala pasada? No solo mata a Mufasa, su propio hermano, sino que además hace que Simba, su sobrino, viva con un sentimiento de culpa al pensar que su padre ha muerto por su culpa.",
      img: "assets/img/scar.jpg",
      aparicion: "1939-05-01",
      casa:"Disney"
    },
    {
      nombre: "Úrsula",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos.",
      img: "assets/img/ursula.jpg",
      aparicion: "1964-01-01",
      casa: "Disney"
    },
    {
      nombre: "Hades",
      bio: "Personaje que resulta simpático al principio (¿serán los chistes? ¿su pelo?) aunque no esconde sus verdaderas y crueles intenciones.",
      img: "assets/img/hades.jpg",
      aparicion: "1962-05-01",
      casa:"Disney"
    },
    {
      nombre: "Jafar",
      bio: "Sólo con sus ojos entrecerrados y esa nariz aguileña hace que no te fíes de semejante personaje.",
      img: "assets/img/jafar.jpg",
      aparicion: "1940-06-01",
      casa: "Disney"
    },
    {
      nombre: "Capitán Garfio",
      bio: "MALO POR EXCELENCIA. Vamos a ver, viaja por los mares buscando a un niño y de paso al cocodrilo que le dejó sin mano.",
      img: "assets/img/capitan-garfio.jpg",
      aparicion: "1962-08-01",
      casa: "Disney"
    },
    {
      nombre: "Shan Yu",
      bio: "Asesino en serie, líder de los Hunos...¿Qué más necesitáis? Shan Yu es malo; no solo quiere invadir un país del tamaño de China si no que también quiere cargarse al Emperador y al Ejército imperial. ",
      img: "assets/img/shan-yu-mulan.jpg",
      aparicion: "1974-11-01",
      casa: "Disney"
    }
  ];

  constructor() {
    console.log('inicio servicio villanos')
   }
  getVillanos():Villano[] {
    return this.Villanos;
  }
  
  getvillano(idx: string) {
    return this.Villanos[idx];
  }
   
}
export interface Villano{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?:number;
}
