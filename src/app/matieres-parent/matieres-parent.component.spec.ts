import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatieresParentComponent } from './matieres-parent.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';
import {MatiereService} from '../matieres/matiere.service';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIconModule,
  MatListModule, MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrComponentlessModule, ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MatieresParentComponent', () => {
  let component: MatieresParentComponent;
  let fixture: ComponentFixture<MatieresParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresParentComponent ],
      imports: [
        LayoutModule,
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
        MatMenuModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({toString}),
        ToastrComponentlessModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [Store, MatiereService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieresParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
