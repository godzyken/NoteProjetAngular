import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatieresParentComponent } from './matieres-parent.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';
import {MatiereService} from '../matieres/matiere.service';

describe('MatieresParentComponent', () => {
  let component: MatieresParentComponent;
  let fixture: ComponentFixture<MatieresParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresParentComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({toString})
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
