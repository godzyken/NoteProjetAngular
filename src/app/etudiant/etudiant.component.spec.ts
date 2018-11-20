import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EtudiantComponent} from './etudiant.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';
import {EtudiantService} from './etudiant.service';

describe('EtudiantComponent', () => {
  let component: EtudiantComponent;
  let fixture: ComponentFixture<EtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({toString})
      ],
      providers: [
        Store,
        EtudiantService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
