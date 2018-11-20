import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {pluck} from 'rxjs/operators';
import {DashboardLoadStart} from '../store/actions/dashboard.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  username$: Observable<string>;
  dashboardData$: Observable<any>;
  constructor(private  store: Store<state>) {
    this.username$ = this.store.pipe(pluck('auth', 'username'));
    this.dashboardData$ = this.store.pipe(pluck('dashboard', 'dashboardData'));
  }

  ngOnInit() {
    this.store.dispatch(new DashboardLoadStart());
  }

  logout() {
    this.store.dispatch(new LogoutRequested());
  }
}
