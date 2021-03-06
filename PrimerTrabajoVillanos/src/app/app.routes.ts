import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { VillanosComponent } from "./components/villanos/villanos.component";
  import { from } from 'rxjs';
import { VillanoComponent } from './components/villano/villano.component';
import { AngularStylosComponent } from './components/angular-stylos/angular-stylos.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'villanos', component: VillanosComponent },
  { path: 'villano/:id', component: VillanoComponent },
  {path:'angular-stylos', component:AngularStylosComponent},
  { path: 'about', component: AboutComponent },

  { path: '**', pathMatch:'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

