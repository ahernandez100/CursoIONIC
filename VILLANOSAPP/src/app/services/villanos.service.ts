import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { VillanoModel } from '../models/villano.model';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  constructor(private _http: HttpClient) { }
  
  private url = 'https://crudvillanos-default-rtdb.firebaseio.com';
  getVillano(id: string) {

    return this._http.get(`${this.url}/villanos/${id}.json`);
  }
  crearVillano(villano: VillanoModel) {
    return this._http.post(`${this.url}/villanos.json`, villano).pipe(
      map((resp: any) => {
        villano.id = resp.name;
        return villano;
      })
    );
  }

  actualizarVillano(villano: VillanoModel) {
    
    const villanoTemp = {
      ...villano
    }

    delete villanoTemp.id;

    return this._http.put(`${this.url}/villanos/${villano.id}.json`, villanoTemp);

  }
  borrarVillano(id: string) {
    return this._http.delete(`${this.url}/villanos/${id}.json`);
  }
   
  getVillanos() {
    return this._http.get(`${this.url}/villanos.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(villanoOBJ: object) {
    
    const villanos: VillanoModel[] = [];

    Object.keys(villanoOBJ).forEach(key => {
      const villano: VillanoModel = villanoOBJ[key];
      villano.id = key;

      villanos.push(villano);
    });

    if (villanoOBJ === null) { return []; }
    return villanos;

  }
}
