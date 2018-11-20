import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {DashboardActionsTypes, DashboardLoadEnd} from '../actions/dashboard.actions';
import {DashboardService} from '../../dashboard/dashboard.service';

@Injectable()
export class DashboardEffects {

  @Effect()
  dashboardLoadStart$ = this.actions$.pipe(
    ofType(DashboardActionsTypes.DashboardLoadStart),
    switchMap(() => this.dashboardService.loadDashboard$().pipe(
      map(data => new DashboardLoadEnd(data))
    ))
  );

  constructor(private actions$: Actions,
              private dashboardService: DashboardService) {
  }
}
