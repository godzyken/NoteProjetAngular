import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromAuth from './reducers/auth.reducer';
import * as fromDashboard from './reducers/dashboard.reducer';
import * as fromEtudiant from './reducers/etudiant.reducer';
import * as fromMatiere from './reducers/matiere.reducer';

export interface State {
  auth: fromAuth.State;
  dashboard: fromDashboard.State;
  etudiant: fromEtudiant.EtudiantListStateEntity;
  matiere: fromMatiere.MatiereListStateEntity;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  dashboard: fromDashboard.reducer,
  etudiant: fromEtudiant.etudiantsReducer,
  matiere: fromMatiere.matieresReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
