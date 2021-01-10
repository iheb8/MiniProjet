import { Injectable } from '@angular/core';
import { Jeu } from '../model/jeu.model';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  jeux : Jeu[]; //un tableau de Jeu
  jeu: Jeu;
  constructor() { 
    this.jeux = [
      {idJeu : 1, nomJeu : "Fifa 21", prixJeu : 300.000, dateCreation : new Date("01/14/2020")},
      {idJeu : 2, nomJeu : "Pes 2021", prixJeu : 250, dateCreation : new Date("12/17/2020")},
      {idJeu : 3, nomJeu :"GTA V", prixJeu : 900.123, dateCreation : new Date("02/20/2020")}
       ];
  }
  listeJeux():Jeu[] {
    return this.jeux;
}
ajouterJeu( j: Jeu){
this.jeux.push(j);
}

supprimerJeu( j: Jeu){
  //supprimer le jeu j du tableau jeux
  const index = this.jeux.indexOf(j, 0);
  if (index > -1) {
  this.jeux.splice(index, 1);
  }
  //ou Bien
  /* this.jeux.forEach((cur, index) => {
  if(j.idJeu === cur.idJeu) {
  this.jeux.splice(index, 1);
  }
  }); */
  }
  consulterJeu(id:number): Jeu{
    this.jeu = this.jeux.find(j => j.idJeu == id);
    return this.jeu;
    }

    trierJeux(){
      this.jeux = this.jeux.sort((n1,n2) => {
      if (n1.idJeu > n2.idJeu) {
      return 1;
      }
      if (n1.idJeu < n2.idJeu) {
      return -1;
      }
      return 0;
      });
      }
      
  
    updateJeu(j:Jeu)
    {
    // console.log(j);
    this.supprimerJeu(j);
    this.ajouterJeu(j);
    this.trierJeux();
    }
     

    
}
