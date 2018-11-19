import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import {_createStoreReducers} from '@ngrx/store';
import {MatiereListEffects} from './effects/matiere.effect';
import {MatiereListStateEntity, matieresReducer} from './reducers/matiere.reducer';
import {EtudiantListStateEntity, etudiantsReducer} from './reducers/etudiant.reducer';
import {EtudiantListEffects} from './effects/etudiant.effect';

// Le root reducer
const reducers = {
  matieres: matieresReducer,
  etudiants: etudiantsReducer
};

export interface AppState {
  matieres: MatiereListStateEntity;
  etudiants: EtudiantListStateEntity;
}

// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const appEffects = [MatiereListEffects, EtudiantListEffects];
