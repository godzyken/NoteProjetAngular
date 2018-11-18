import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {EtudiantListeModule} from '../actions/etudiant.action';
import {EtudiantService} from '../../etudiant/etudiant.service';

Injectable();

export class EtudiantListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadEtudiants$: Observable<EtudiantListeModule.Actions> = this.actions$
    .pipe(
      ofType(EtudiantListeModule.ActionTypes.LOAD_INIT_ETUDIANTS),
      switchMap(action => this.etudiantListService.getEtudiant()),
      map(etudiants => new EtudiantListeModule.SuccessInitEtudiants(etudiants)),
      catchError((err) => of(new EtudiantListeModule.ErrorLoadAction(err)))
    );

  @Effect() LoadCreateEtudiant$: Observable<EtudiantListeModule.Actions> = this.actions$
    .pipe(
      ofType<EtudiantListeModule.LoadCreateEtudiant>(EtudiantListeModule.ActionTypes.LOAD_CREATE_ETUDIANT),
      switchMap(action => this.etudiantListService.createEtudiant(action.payload)),
      map(etudiant => new EtudiantListeModule.SuccessCreateEtudiant(etudiant)),
      catchError((err) => of(new EtudiantListeModule.ErrorLoadAction(err)))
    );

  @Effect() LoadDeleteEtudiant$: Observable<EtudiantListeModule.Actions> = this.actions$
    .pipe(
      ofType<EtudiantListeModule.LoadDeleteEtudiant>(EtudiantListeModule.ActionTypes.LOAD_DELETE_ETUDIANT),
      switchMap(action => this.etudiantListService.deleteEtudiant(action.payload)),
      map(id => new EtudiantListeModule.SuccessDeleteEtudiant(id)),
      catchError((err) => of(new EtudiantListeModule.ErrorLoadAction(err)))
    );

  constructor(private etudiantListService: EtudiantService, private actions$: Actions) {
  }
}
