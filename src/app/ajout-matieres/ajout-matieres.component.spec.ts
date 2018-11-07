import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, FormGroup} from '@angular/forms';
import { AjoutMatieresComponent } from './ajout-matieres.component';

describe('AjoutMatieresComponent', () => {
  let component: AjoutMatieresComponent;
  let fixture: ComponentFixture<AjoutMatieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutMatieresComponent ],
      imports: [FormsModule, FormGroup]
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
