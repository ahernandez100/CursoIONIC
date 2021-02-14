import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { RespuestaTopHeadlines } from "../interfaces/interfaces";
import { environment } from '../../environments/environment';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0; 

  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
     
    query = apiUrl + query;

    return this.http.get<T>(query, { headers } );
  }

  getTopHeadlines(){ 
    this.headlinesPage++; 

   return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${this.headlinesPage}`);
  
  }
  getTopHeadlines_(){ 
    this.headlinesPage++; 

     return this.RespuestaTopHeadlines_;
  
  }
  getTopHeadlinesCategory(categoria:string){ 
    if (this.categoriaActual == categoria) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriaPage}`);
 
 }


private RespuestaTopHeadlines_ : RespuestaTopHeadlines=
  {
  status: "acces",
  totalResults: 10,
  articles:
    [{
      author: null,
      content:"Es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics que existen en su universo compartido. El personaje fue creado por el escritor y editor Stan Lee y el escritor y artista Steve Ditko, y apareció por primera vez en el cómic de antología Amazing Fantasy # 15 (agosto de 1962) en Silver Age of Comic Books.",
      description:"Sus poderes son:Fuerza sobre humana, rapidez y reflejos proporcionales a una araña.Capacidad de adherirse a casi cualquier superficie.",
      publishedAt:"2021-02-14T14:05:00Z",
      source:{
        id:"1",
        name:"Spiderman"
      },
      title:"Spiderman MArvel Comics",
      url:"https://www.superheroeweb.com/spiderman/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/02/imagen-spiderman-top-canva-1024x576.jpg"
    },
    {
      author: null,
      content:"Un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics. Creado por Paul Norris y Mort Weisinger, el personaje debutó en More Fun Comics # 73.",
      description:"Un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics",
      publishedAt:"2021-02-14T14:05:00Z",
      source:{
        id:"2",
        name:"Aquaman"
      },
      title:"Aquaman -MArvel Comics",
      url:"https://www.superheroeweb.com/aquaman/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/02/aquaman-nueva-1-1024x576.jpg"
    },
    {
      author: null,
      content:"Es un antihéroe ficticio creado por Marvel que aparece en sus cómics. La primera aparición de Deadpool fue en New Mutants # 98 por Rob Liefeld y Fabian Nicieza en febrero de 1991. Es considerado como uno de los personajes más divertidos de los cómics debido a su tendencia a romper la cuarta pared.",
      description:"Es un antihéroe ficticio creado por Marvel que aparece en sus cómics",
      publishedAt:"2021-02-14T14:05:00Z",
      source:{
        id:"3",
        name:"Deadpool"
      },
      title:"Deadpool -MArvel Comics",
      url:"https://www.superheroeweb.com/otros-superheroes/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/imagen-deadpool-top-min.jpg"
    },
    {
      author: null,
      content:"También conocido como Bruce Wayne, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics.",
      description:"El personaje fue creado por el artista Bob Kane y el escritor Bill Finger, y apareció por primera vez en Detective Comics # 27.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"4",
        name:"Batman"
      },
      title:"Batman -MArvel Comics",
      url:"https://www.superheroeweb.com/batman",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/02/imagen-batmann-top-1024x576.jpg"
    },
    {
      author: null,
      content:"La Capitana Marvel dio un gran salto para llegar el Nº 1 con 9.140.000 busquedas al mes online.Con su película CAPITANA MARVEL Carol Susan Jane Danvers ha superado a todos los superheroes en la popularidad online.",
      description:"La Capitana Marvel dio un gran salto para llegar el Nº 1 con 9.140.000 busquedas al mes online.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"5",
        name:"CAPTAIN MARVEL"
      },
      title:"CAPTAIN MARVEL -MArvel Comics",
      url:"https://www.superheroeweb.com/lista-top-de-superheroes-2019/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/capitana-marvel-lista-1-1.jpg"
    },
    {
      author: null,
      content:"The Flash es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics. Su primera aparición fue en octubre de 1956 y fue creado por Robert Kanigher",
      description:"The Flash es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics. Su primera aparición fue en octubre de 1956 y fue creado por Robert Kanigher",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"6",
        name:"Flash"
      },
      title:"Flash -MArvel Comics",
      url:"https://www.superheroeweb.com/flash/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/imagen-flash-top-1-min.jpg"
    },
    {
      author: null,
      content:"Thor Odinson es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje, basado en la deidad mitológica nórdica del mismo nombre, es el dios asgardiano del trueno y posee el martillo encantado Mjölnir , que le otorga la capacidad de vuelo y la manipulación del clima entre sus otros atributos sobrehumanos. Chris Hemsworth lo retrató en el universo cinematográfico de Marvel.",
      description:"Thor Odinson es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"7",
        name:"Thor"
      },
      title:"Thor -MArvel Comics",
      url:"https://www.superheroeweb.com/otros-superheroes/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/imagen-thor-lista-2-min.jpg"
    },
    {
      author: null,
      content:"La mujer maravilla es un superhéroe ficticio creado por William Moulton Marston y Harry G. Peter, que aparece en los cómics estadounidenses publicados por DC Comics. El personaje es un miembro fundador de la Liga de la Justicia, una diosa y un embajador general de la población amazónica.",
      description:"La mujer maravilla es un superhéroe ficticio creado por William Moulton Marston y Harry G. Peter, que aparece en los cómics estadounidenses publicados por DC Comics.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"8",
        name:"Wonder Woman"
      },
      title:"Wonder Woman - MArvel Comics",
      url:"https://www.superheroeweb.com/wonder-woman/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/imagen-wonder-woman-top-2-min.jpg"
    },
    {
      author: null,
      content:"El personaje fue creado por el escritor y editor Stan Lee, desarrollado por el guionista Larry Lieber, y diseñado por los artistas Don Heck y Jack Kirby. Hizo su primera aparición en Tales of Suspense # 39. En The Marvel Cinematic Universe, él es retratado por Robert Downey Jr",
      description:"Este superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics, así como en sus medios asociados.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"9",
        name:"Iron Man"
      },
      title:"Iron Man - MArvel Comics",
      url:"https://www.superheroeweb.com/iron-man",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/imagen-ironman-top-min.jpg"
    },
    {
      author: null,
      content:"Fue publicado por DC Comics. La primera película de superhéroes animada fue Superman. La historia de origen de Superman relata que nació Kal-El en el planeta Krypton, antes de ser lanzado a la Tierra como un infante por su padre científico Jor-El, momentos antes de la destrucción de Krypton. Descubierto y adoptado por una pareja de agricultores de Kansas, el niño es criado como Clark Kent y está impregnado de una fuerte brújula moral. Muy pronto comenzó a mostrar varias habilidades sobrehumanas, las cuales, al alcanzar la madurez, resolvieron utilizarlas en beneficio de la humanidad a través de una identidad secreta de “Superman”.",
      description:"Probablemente el primer superhéroe poderoso en el mundo ficticio. El personaje fue creado por el escritor Jerry Siegel y el artista Joe Shuster, estudiantes de secundaria que viven en Cleveland, Ohio, en 1933.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"10",
        name:"Superman"
      },
      title:"Superman - MArvel Comics",
      url:"https://www.superheroeweb.com/superman-2/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/imagen-superman-top-min.jpg"
    }


  ]
  } 




















}
