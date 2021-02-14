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
  totalResults: 15,
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
      title:"Spiderman-Hereo",
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
      title:"Aquaman-Hereo",
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
      title:"Deadpool-Hereo",
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
      title:"Batman-Hereo",
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
      title:"CAPTAIN MARVEL-Hereo",
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
      title:"Flash-Hereo",
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
      title:"Thor-Hereo",
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
      title:"Wonder Woman-Hereo",
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
      title:"Iron Man-Hereo",
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
      title:"Superman-Hereo",
      url:"https://www.superheroeweb.com/superman-2/",
      urlToImage:"https://www.superheroeweb.com/wp-content/uploads/2019/03/imagen-superman-top-min.jpg"
    },
    {
      author: null,
      content:"El Titán Loco es el protagonista indiscutible de las últimas películas de la franquicia, pero, como hemos comentado al principio, no es el más carismático de los villanos. Mirado con perspectiva, su plan hace más aguas que el final de Titanic. Si entonces nos preguntábamos cómo es que nadie vio que había espacio para dos en la tabla, Thanos nos hace cuestionarnos por qué decide matar a la mitad de la población universal cuando podría doblar los recursos.",
      description:"El Titán Loco es el protagonista indiscutible de las últimas películas de la franquicia, pero, como hemos comentado al principio, no es el más carismático de los villanos.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"11",
        name:"Thanos"
      },
      title:"Thanos -Villano",
      url:"https://hipertextual.com/2019/07/10-villanos-ucm-peor-mejor",
      urlToImage:"https://hipertextual.com/files/2019/07/hipertextual-10-villanos-ucm-peor-mejor-2019302965-860x521.jpg"
    },
    {
      author: null,
      content:"Si hay algo que hace que empaticemos con un villano es su capacidad de redención. Nébula actúa como la mala de la película en la primera cinta de Guardianes de la Galaxia y en gran parte de la segunda. Se nos presenta como una asesina sin escrúpulos que cumple sin rechistar las órdenes de Thanos. Sin embargo, es mucho más que eso.",
      description:"Si hay algo que hace que empaticemos con un villano es su capacidad de redención. Nébula actúa como la mala de la película en la primera cinta de Guardianes de la Galaxia y en gran parte de la segunda.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"12",
        name:"Nébula"
      },
      title:"Nébula -Villano",
      url:"https://hipertextual.com/2019/07/10-villanos-ucm-peor-mejor",
      urlToImage:"https://hipertextual.com/files/2019/07/hipertextual-10-villanos-ucm-peor-mejor-2019277530-860x430.jpg"
    },
    {
      author: null,
      content:"Ultron refleja una de las mayores meteduras de pata de Tony Stark y solo por eso se merece estar en un puesto tan alto. Su personalidad, como bien explica en la película, es una combinación retorcida de la Inteligencia Artificial de Jarvis, los conocimientos adquiridos en la red y los razonamientos del propio Iron Man. Por supuesto, su línea de pensamiento pronto gira en sentido similar a la de Thanos y decide que, para salvar la Tierra, debe destruirla.",
      description:"Ultron refleja una de las mayores meteduras de pata de Tony Stark y solo por eso se merece estar en un puesto tan alto. Su personalidad, como bien explica en la película, es una combinación retorcida de la Inteligencia Artificial de Jarvis, los conocimientos adquiridos en la red y los razonamientos del propio Iron Man.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"13",
        name:"Ultron"
      },
      title:"Ultron -Villano",
      url:"https://hipertextual.com/2019/07/10-villanos-ucm-peor-mejor",
      urlToImage:"https://hipertextual.com/files/2019/07/hipertextual-10-villanos-ucm-peor-mejor-2019804448-860x485.jpg"
    },
    {
      author: null,
      content:"Es el primer villano del UCM con el que los fan han caído absolutamente rendidos. Su personalidad impredecible, divertida y sarcástica lo convierten en el más carismático de los villanos de Marvel. Hay que reconocer que gran parte de la culpa la tiene Tom Hiddleston, que le dio al personaje el toque final de locura que terminó por enamorar al público.De no ser por este personaje, las dos primeras entregas de Thor habrían quedado aún más insulsas de lo que son.",
      description:"Es el primer villano del UCM con el que los fan han caído absolutamente rendidos.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"14",
        name:"Loki"
      },
      title:"Loki -Villano",
      url:"https://hipertextual.com/2019/07/10-villanos-ucm-peor-mejor",
      urlToImage:"https://hipertextual.com/files/2019/07/hipertextual-10-villanos-ucm-peor-mejor-2019299397-860x452.jpeg"
    },
    {
      author: null,
      content:"Es la más reciente incorporación al plantel de villanía del UCM y, quizá por esa misma razón, es el que aúna más características favorables. Al igual que Ego, emplea su carisma y su labia para engañar al protagonista y hacerle creer que es bueno, cuando en realidad sus motivaciones son muy oscuras. Por otro lado, es uno más de los villanos que nace por obra y gracia del ego de Tony Stark —lo que hace que uno se pregunte quién es el verdadero villano—. Sus poderes se basan en ingenio, tecnología y manipulación, una combinación nada desdeñable de habilidades con un resultado visualmente genial a la par que terrorífico. Y no hace falta decir que está dispuesto a todo para convertirse en el nuevo héroe de la Tierra. No tiene escrúpulos a la hora de matar inocentes, incluso si son niños.",
      description:"Es la más reciente incorporación al plantel de villanía del UCM y, quizá por esa misma razón, es el que aúna más características favorables. Al igual que Ego, emplea su carisma y su labia para engañar al protagonista y hacerle creer que es bueno, cuando en realidad sus motivaciones son muy oscuras.",
      publishedAt:"2021-02-15T14:05:00Z",
      source:{
        id:"15",
        name:"Misterio"
      },
      title:"Misterio -Villano",
      url:"https://hipertextual.com/2019/07/10-villanos-ucm-peor-mejor",
      urlToImage:"https://hipertextual.com/files/2019/07/hipertextual-deepfakes-se-aduenan-spider-man-lejos-casa-2019989164-860x360.jpg"
    }
  ]
  } 




















}
