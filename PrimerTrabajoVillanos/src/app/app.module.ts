import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

//SERVICIOS 

import { HeroesService } from "./servicios/heroes.service";
import { VillanosService } from './servicios/villanos.service';
// RUTAS
import { APP_ROUTING } from "./app.routes";

//  COMPONENTES 
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { VillanosComponent } from './components/villanos/villanos.component';

import { VillanoComponent } from './components/villano/villano.component';
import { AngularStylosComponent } from './components/angular-stylos/angular-stylos.component';
import { LinksComponent } from './components/about/links/links.component';
import { InfoComponent } from './components/about/info/info.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    VillanosComponent,
    VillanoComponent,
    AngularStylosComponent,
    LinksComponent,
    InfoComponent,
 
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule
  ],
  providers: [
    HeroesService,
    VillanosService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
