import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresCloneComponent } from './matieres-clone.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StateObservable, Store} from '@ngrx/store';

describe('MatieresCloneComponent', () => {
  let component: MatieresCloneComponent;
  let fixture: ComponentFixture<MatieresCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresCloneComponent ],
      imports: [RouterTestingModule],
      providers: [Store, StateObservable]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieresCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
