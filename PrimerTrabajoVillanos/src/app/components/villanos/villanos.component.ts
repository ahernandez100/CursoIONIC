import { Component, OnInit } from '@angular/core';
import { VillanosService, Villano } from '../../servicios/villanos.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {
  villanos: Villano[] =[];
  index: number;

  constructor(private _villanoService: VillanosService,
    private _router: Router) {
console.log("Constructor Villanos");
}

  ngOnInit(): void 
  {
    this.villanos = this._villanoService.getVillanos();
    console.log(this.villanos)
  }
  verVillanos() {
    // console.log(this.index);  
    this._router.navigate(['/villano', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }
}
