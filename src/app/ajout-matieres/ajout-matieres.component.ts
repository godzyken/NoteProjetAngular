import { Component, OnInit } from '@angular/core';
import {MatiereService } from '../matieres/matiere.service';
import {Matiere } from '../matieres/matieres.interface';

@Component({
  selector: 'app-ajout-matieres',
  templateUrl: './ajout-matieres.component.html',
  styleUrls: ['./ajout-matieres.component.css']
})
export class AjoutMatieresComponent implements OnInit {

  matieres: Matiere = {
    id_matiere: null,
    libelle: '',
    coefficient: null
  };

  constructor(private matiereService: MatiereService) { }

  ngOnInit() {
  }

  createMatiere(data: Matiere) {
    this.matiereService.createMatiere(data);
  }

}
