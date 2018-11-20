import * as fromEtudiants from '../reducers/etudiant.reducer';
import {State} from '../index';
import {createSelector} from '@ngrx/store';


// La premiere fonction amene vers le state etudiant
export const selectEtudiantListState$ = (state: State) => state.etudiant;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
// export const selectEtudiants$ = createSelector(selectEtudiantListState$, (etudiants) =>  etudiants.data);

export const selectEtudiantListEntitiesConverted$ = createSelector(
  selectEtudiantListState$,
  fromEtudiants.selectEtudiants
);

export const selectEtudiantsLoading$ =
  createSelector(selectEtudiantListState$, (etudiants) => etudiants.loading);

export const selectEtudiantsLoaded$ =
  createSelector(selectEtudiantListState$, (etudiants) => etudiants.loaded);

export const selectEtudiansErrors$ =
  createSelector(selectEtudiantListState$, (etudiants) => etudiants.logs);
