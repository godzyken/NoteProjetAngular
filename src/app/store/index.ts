import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromAuth from './reducers/auth.reducer';
import * as fromDashboard from './reducers/dashboard.reducer';


export interface State {
  auth: fromAuth.State;
  dashboard: fromDashboard.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  dashboard: fromDashboard.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
