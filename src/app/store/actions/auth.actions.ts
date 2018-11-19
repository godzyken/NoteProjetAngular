import {Action} from '@ngrx/store';
import {PayloadAction} from '../../app.model';


export enum AuthActionsTypes {
  LoginAttempted = '[Login Page] Utilisateur en attente de connection',
  LoginSuccessful = '[Auth API] Connection réussi',
  LoginFailed = '[Auth API] Connection échoué',
  LogoutRequested = '[Navbar] Demande de déconnection',
  LogoutSuccessful = '[Auth API]Déconnection réussie'
}


export class LoginAttempted extends PayloadAction {
  readonly type = AuthActionsTypes.LoginAttempted;
}

export class LoginFailed extends PayloadAction {
  readonly type = AuthActionsTypes.LoginFailed;
}

export class LoginSuccessful extends PayloadAction {
  readonly type = AuthActionsTypes.LoginSuccessful;
}

export class LogoutRequested extends PayloadAction {
  readonly type = AuthActionsTypes.LogoutRequested;
}

export class LogoutSuccessful extends PayloadAction {
  readonly type = AuthActionsTypes.LogoutSuccessful;
}

export type AuthActions = LoginAttempted | LoginFailed | LoginSuccessful | LogoutRequested | LogoutSuccessful;

