import {PayloadAction} from '../../app.model';
//  todo logoutSuccessFul : import {LogoutSuccessful} from '../auth/auth.actions';

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

// export type DashboardActions = DashboardLoadStart | DashboardLoadEnd | LogoutSuccessFul;
