import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AjoutMatieresComponent } from './ajout-matieres.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Store} from '@ngrx/store';

describe('AjoutMatieresComponent', () => {
  let component: AjoutMatieresComponent;
  let fixture: ComponentFixture<AjoutMatieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutMatieresComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [
        {provide: Store}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
