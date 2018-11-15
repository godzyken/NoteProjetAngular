import {Component, Inject, OnInit} from '@angular/core';
import {Matiere} from '../matieres/matieres.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppState} from '../store';
import {Store} from '@ngrx/store';
import {MatiereListModule} from '../store/actions/matiere.action';

@Component({
  selector: 'app-ajout-matieres',
  templateUrl: './ajout-matieres.component.html',
  styleUrls: ['./ajout-matieres.component.css']
})
export class AjoutMatieresComponent implements OnInit {

  public matiereForm: FormGroup;

  constructor(private router: Router, @Inject(FormBuilder) fb: FormBuilder, private store: Store<AppState>) {
    this.matiereForm = fb.group({
      libelle: ['', Validators.required],
      coefficient: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createMatiere(data: Matiere) {
    const payload = {
      ...data
    };
    this.store.dispatch(new MatiereListModule.LoadCreateMatiere(payload));
    // this.matiereForm.reset();
    this.router.navigateByUrl('/matiere').then(data => {});
  }

}
