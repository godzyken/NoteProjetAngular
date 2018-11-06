import { Component, OnInit } from '@angular/core';
import { Matiere } from './matieres.interface';
import {MatiereService} from './matiere.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

  matieres: Matiere[];

  constructor(private matiereSevice: MatiereService, private router: Router) { }

  ngOnInit() {
    this.matiereSevice
      .getMatiere()
      .subscribe((data: Matiere[]) => {
        this.matieres = data;
      });
  }

  goToAddMatiere() {
    this.router.navigateByUrl('/ajout-matiere');
  }

}
