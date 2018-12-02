import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
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
import {MatieresComponent} from './matieres/matieres.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule, ToastrComponentlessModule} from 'ngx-toastr';
import {MatiereService} from './matieres/matiere.service';
import {AjoutMatieresComponent} from './ajout-matieres/ajout-matieres.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {MatieresParentComponent} from './matieres-parent/matieres-parent.component';
import {MatieresCloneComponent} from './matieres-clone/matieres-clone.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from './store';
import {StoreModule} from '@ngrx/store';
import {EtudiantComponent} from './etudiant/etudiant.component';
import {AjoutEtudiantsComponent} from './ajout-etudiants/ajout-etudiants.component';
import {NotesComponent} from './notes/notes.component';
import {AjoutNotesComponent} from './ajout-notes/ajout-notes.component';
import {EtudiantService} from './etudiant/etudiant.service';
import {AuthModule} from './auth/auth.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth/auth.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/matiere', pathMatch: 'full'},
  {path: 'matiere', component: MatieresParentComponent},
  {path: 'ajout-matiere', component: AjoutMatieresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MatieresComponent,
    AjoutMatieresComponent,
    MatieresParentComponent,
    MatieresCloneComponent,
    EtudiantComponent,
    AjoutEtudiantsComponent,
    NotesComponent,
    AjoutNotesComponent,
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    DashboardModule,
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
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ToastrModule.forRoot(),
    ToastrComponentlessModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [
    MatiereService,
    EtudiantService,
    AuthService
  ],
  bootstrap: [AppComponent],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
