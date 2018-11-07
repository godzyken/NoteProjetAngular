import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresParentComponent } from './matieres-parent.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StateObservable, Store} from '@ngrx/store';

describe('MatieresParentComponent', () => {
  let component: MatieresParentComponent;
  let fixture: ComponentFixture<MatieresParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresParentComponent ],
      imports: [RouterTestingModule],
      providers: [Store, StateObservable]
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
