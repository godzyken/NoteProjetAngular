import {DashboardActions, DashboardActionsTypes} from '../actions/dashboard.actions';
import {AuthActionsTypes} from '../actions/auth.actions';


export interface State {
  dashboardData: any;
}

export const initialState: State = {
  dashboardData: undefined
};

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {

    case DashboardActionsTypes.DashboardLoadEnd:
      return {
        ...state,
        dashboardData: action.payload.data
      };
    case AuthActionsTypes.LogoutSuccessful:
      return {
        ...initialState
      };

    default:
      return state;
  }

}
