import {AuthActions, AuthActionsTypes} from '../actions/auth.actions';


export interface State {
  username: string;
  token: string;
}

export const initialState: State = {
  username: undefined,
  token: undefined
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionsTypes.LoginAttempted:
      return {
        ...state,
        username: action.payload.username
      };

    case AuthActionsTypes.LoginFailed:
      return {
        ...state,
        username: undefined
      };

    case AuthActionsTypes.LoginSuccessful:
      return {
        ...state,
        token: action.payload
      };
    case AuthActionsTypes.LogoutSuccessful:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
