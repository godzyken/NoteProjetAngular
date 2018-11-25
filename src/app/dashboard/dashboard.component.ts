import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {State} from '../store';
import {pluck, tap} from 'rxjs/operators';
import {DashboardLoadStart} from '../store/actions/dashboard.actions';
import {LogoutRequested} from '../store/actions/auth.actions';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {selectMatieresErrors$} from '../store/selectors/matiere.selector';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public matiereListErrors$: Observable<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  username$: Observable<string>;
  dashboardData: Observable<any>;

  constructor(private breakpointObserver: BreakpointObserver,
              public toastr: ToastrService,
              private store: Store<State>) {
    this.username$ = this.store.pipe(
      pluck('auth', 'username')
    );
    this.dashboardData = this.store.pipe(
      pluck('dashboard', 'dashboardData')
    );
    this.matiereListErrors$ = store.pipe(
      select(selectMatieresErrors$),
      tap((dialog) => {
        if (!dialog) {
          return;
        }
        if (dialog.type === 'ERROR') {
          this.toastr.error(dialog.message);
        } else {
          this.toastr.success(dialog.message);
        }
        console.log(dialog);
      })
    );
    this.matiereListErrors$.subscribe();
  }

  ngOnInit() {
    this.store.dispatch(new DashboardLoadStart());
  }

  logout() {
    this.store.dispatch(new LogoutRequested());
  }
}
