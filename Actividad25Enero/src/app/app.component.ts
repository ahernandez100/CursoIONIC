import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Actividad25Enero';
  flag:boolean = false;
  superhero = 'Spiderman';
    cambiarClss(){
    this.flag = !this.flag;
  }

  getColor() {
   let  counterStatus = Math.random() > 0.5 ? 'on' : 'off';
    return counterStatus === 'on' ? 'green' : 'red';
  }
}



