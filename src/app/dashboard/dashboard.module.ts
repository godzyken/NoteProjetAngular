import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DashboardComponent} from './dashboard.component';
import {DashboardService} from './dashboard.service';
import {DashboardEffects} from '../store/effects/dashboard.effects';
import * as fromDashboard from '../store/reducers/dashboard.reducer';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
