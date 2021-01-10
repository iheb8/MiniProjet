import { Component, OnInit } from '@angular/core';
import { Jeu } from '../model/jeu.model';
import { JeuService } from '../services/jeu.service';

@Component({
  selector: 'app-add-jeu',
  templateUrl: './add-jeu.component.html',
  styleUrls: ['./add-jeu.component.css']
})
export class AddJeuComponent implements OnInit {
  newJeu = new Jeu();

  message :string

  constructor(private jeuService: JeuService) { }

  ngOnInit(): void {
  }

  addJeu(){
    //console.log(this.newJeu);
    this.jeuService.ajouterJeu(this.newJeu);
    this.message = "Jeu " + this.newJeu.nomJeu + " ajouté avec succès !";

    }
  
  

}
