import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JeuService } from '../services/jeu.service';
import { Jeu } from '../model/jeu.model';
@Component({
  selector: 'app-update-jeu',
  templateUrl: './update-jeu.component.html',
  styles: [
  ]
})
export class UpdateJeuComponent implements OnInit {
  currentJeu = new Jeu();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router ,
              private jeuService: JeuService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
this.currentJeu = this.jeuService.consulterJeu(this.activatedRoute.snapshot.params.id);
console.log(this.currentJeu);
  }

  updateJeu()
{ //console.log(this.currentJeu);
this.jeuService.updateJeu(this.currentJeu);
this.router.navigate(['jeux']);
}


}
