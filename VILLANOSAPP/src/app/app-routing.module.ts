import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillanoComponent } from "./pages/villano/villano.component";
import { VillanosComponent } from "./pages/villanos/villanos.component";
const routes: Routes = [
  { path: 'villanos', component: VillanosComponent },
  { path: 'villano/:id', component: VillanoComponent },
  { path:'**', pathMatch: 'full', redirectTo:'villanos'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
