import { Component } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias: Article[] = []; 
  
  constructor(private noticiasService: NoticiasService) { }
  
  ngOnInit(): void {

    this.cargarNoticias();

  }
  loadData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    
    this.noticias = this.noticiasService.getTopHeadlines_().articles;

       if (this.noticias.length === 0 ) {
       event.target.disabled = true;
         event.target.complete();
         return;
      }
    if (event) {
       event.target.complete();
       }
  }

}