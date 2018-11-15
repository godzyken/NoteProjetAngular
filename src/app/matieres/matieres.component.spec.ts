import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { MatieresComponent } from './matieres.component';
import {StateObservable, Store} from '@ngrx/store';
import {MatiereService} from './matiere.service';

describe('MatieresComponent', () => {
  let component: MatieresComponent;
  let fixture: ComponentFixture<MatieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresComponent ],
      imports: [RouterTestingModule],
      providers: [Store, StateObservable, MatiereService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
