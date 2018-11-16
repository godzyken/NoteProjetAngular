import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresCloneComponent } from './matieres-clone.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StateObservable, Store, StoreModule} from '@ngrx/store';
import {MatiereService} from '../matieres/matiere.service';

describe('MatieresCloneComponent', () => {
  let component: MatieresCloneComponent;
  let fixture: ComponentFixture<MatieresCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresCloneComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({toString})
      ],
      providers: [Store, MatiereService]
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
