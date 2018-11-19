import {PayloadAction} from '../../app.model';
import {LogoutSuccessful} from './auth.actions';


export enum DashboardActionsTypes {
  DashboardLoadStart = '[Dashboard] Dashboard load started',
  DashboardLoadEnd = '[Dashboard] Dashboard load finished'
}

export class DashboardLoadStart extends PayloadAction {
  readonly type = DashboardActionsTypes.DashboardLoadStart;
}

export class DashboardLoadEnd extends PayloadAction {
  readonly  type = DashboardActionsTypes.DashboardLoadEnd;
}

export type DashboardActions = DashboardLoadStart | DashboardLoadEnd | LogoutSuccessful;
