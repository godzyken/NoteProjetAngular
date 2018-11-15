import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatieresComponent} from './matieres/matieres.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule, ToastrComponentlessModule} from 'ngx-toastr';
import {MatiereService} from './matieres/matiere.service';
import {AjoutMatieresComponent} from './ajout-matieres/ajout-matieres.component';
import {FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {MatieresParentComponent} from './matieres-parent/matieres-parent.component';
import {MatieresCloneComponent} from './matieres-clone/matieres-clone.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {appEffects, getReducers, REDUCER_TOKEN} from './store';
import {StoreModule} from '@ngrx/store';

const appRoutes: Routes = [
  {path: '', redirectTo: '/matiere', pathMatch: 'full'},
  {path: 'matiere', component: MatieresParentComponent},
  {path: 'ajout-matiere', component: AjoutMatieresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MatieresComponent,
    AjoutMatieresComponent,
    MatieresParentComponent,
    MatieresCloneComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    FormGroup,
    ReactiveFormsModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[TODOLIST]',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    ToastrModule.forRoot(),
    ToastrComponentlessModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [{
    provide: REDUCER_TOKEN,
    useFactory: getReducers
  },
    MatiereService
  ],
  bootstrap: [AppComponent],
  exports: [
    DashboardComponent,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AppModule {
}
