import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeuxComponent } from './jeux/jeux.component';
import { AddJeuComponent } from './add-jeu/add-jeu.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';
const routes: Routes = [
  {path: "jeux", component : JeuxComponent},
  {path: "add-jeu", component : AddJeuComponent},
  { path: "", redirectTo: "jeux", pathMatch: "full" },
  {path: "updateJeu/:id", component: UpdateJeuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
