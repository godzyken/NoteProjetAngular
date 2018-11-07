import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { MatieresComponent } from './matieres.component';
import {Store} from '@ngrx/store';

describe('MatieresComponent', () => {
  let component: MatieresComponent;
  let fixture: ComponentFixture<MatieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresComponent ],
      imports: [RouterTestingModule],
      providers: [Store]
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
