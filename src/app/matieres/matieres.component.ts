import { Component, OnInit } from '@angular/core';
import { Matiere } from './matieres.interface';
/*
import {MatiereService} from './matiere.service';
*/
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../store';
import {select, Store} from '@ngrx/store';
import {MatiereListModule} from '../store/actions/matiere.action';
import {selectMatiereListEntitiesConverted$, selectMatieresLoading$} from '../store/selectors/matiere.selector';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

 /* matieres: Matiere[];

  constructor(private matiereSevice: MatiereService, private router: Router) { }

  ngOnInit() {
    this.matiereSevice
      .getMatiere()
      .subscribe((data: Matiere[]) => {
        this.matieres = data;
      });
  }*/

  public matieres$: Observable<Matiere[]>;
  public  matieresLoading: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.matieres$ = store
      .pipe(select(selectMatiereListEntitiesConverted$));

    this.matieresLoading = store.pipe(select(selectMatieresLoading$));
  }

  ngOnInit() {
    this.store.dispatch(new  MatiereListModule.LoadInitMatieres());
  }

  goToAddMatiere () {
    this.router.navigateByUrl('/ajout-matiere');
  }

  deleteMatiere(id: number) {
    this.store.dispatch(new MatiereListModule.LoadDeleteMatiere(id));
  }


}
