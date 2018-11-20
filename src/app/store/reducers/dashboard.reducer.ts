import {DashboardActions,DashboardActionsTypes} from '../actions/dashboard.actions';


export interface State {
  dashboardData: any;
}

export const initialState: State = {
  dashboardData: undefined
};

export function reducer(state = initialState, action: DashboardActionsTypes): State {
  switch (action.type) {
    ...state, dashboardData: action.pay
  }
}
