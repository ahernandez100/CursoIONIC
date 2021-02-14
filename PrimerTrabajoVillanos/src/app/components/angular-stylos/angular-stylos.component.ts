import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-angular-stylos',
  templateUrl: './angular-stylos.component.html',
  styleUrls: ['./angular-stylos.component.css']
})
export class AngularStylosComponent implements OnInit {

  constructor(private _router: Router) {
console.log("Constructor Angular Style");
}
  title = 'Actividad25Enero';
  flag:boolean = false;
  superhero = 'Spiderman';
    cambiarClss()
  {
    this.flag = !this.flag;
  }

  getColor() 
  {
    let  counterStatus = Math.random() > 0.5 ? 'on' : 'off';
    return counterStatus === 'on' ? 'blue' : 'red';
  }
  ngOnInit(): void {
  }

}
