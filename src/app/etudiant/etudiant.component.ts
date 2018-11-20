import { Component, OnInit } from '@angular/core';
import {Etudiant} from './etudiants.interface';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../store';
import {selectEtudiantListEntitiesConverted$, selectEtudiantsLoading$} from '../store/selectors/etudiant.selector';
import {EtudiantListeModule} from '../store/actions/etudiant.action';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  public etudiants$: Observable<Etudiant[]>;
  public  etudiantsLoading: Observable<boolean>;

  constructor(private router: Router, private store: Store<State>) {
    this.etudiants$ = store
      .pipe(select(selectEtudiantListEntitiesConverted$));

    this.etudiantsLoading = store.pipe(select(selectEtudiantsLoading$));
  }

  ngOnInit() {
    this.store.dispatch(new EtudiantListeModule.LoadInitEtudiants());
  }

  goToAddEtudiant() {
    this.router.navigateByUrl('/ajout-etudiant');
  }

  deleteEtudiant(id: number) {
    this.store.dispatch(new EtudiantListeModule.LoadDeleteEtudiant(id));
  }

}
