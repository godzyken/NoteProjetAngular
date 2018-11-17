import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';
import {MatiereService} from './matieres/matiere.service';
import anything = jasmine.anything;
import any = jasmine.any;


@Component({selector: 'app-dashboard', template: ''})
class DashboardComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent
      ],
      providers: [
        {provide: MatiereService}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
