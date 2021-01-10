import { Component, OnInit } from '@angular/core';
import { Jeu } from '../model/jeu.model';
import { JeuService } from '../services/jeu.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html'
})
export class JeuxComponent implements OnInit {
  jeux : Jeu[]; //un tableau de Jeu


  constructor(private jeuService: JeuService) {
    this.jeux = jeuService.listeJeux();
   }

  ngOnInit(): void {
  }

  supprimerJeu(j: Jeu)
{
//console.log(j);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.jeuService.supprimerJeu(j);
}

}
