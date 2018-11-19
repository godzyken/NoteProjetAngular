import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {State} from '../store';
import {Store} from '@ngrx/store';
import {Etudiant} from '../etudiant/etudiants.interface';
import {EtudiantListeModule} from '../store/actions/etudiant.action';

@Component({
  selector: 'app-ajout-etudiants',
  templateUrl: './ajout-etudiants.component.html',
  styleUrls: ['./ajout-etudiants.component.css']
})
export class AjoutEtudiantsComponent implements OnInit {

  public etudiantForm: FormGroup;

  constructor(
    private router: Router,
    @Inject(FormBuilder) fb: FormBuilder,
    private store: Store<State>
  ) {
    this.etudiantForm = fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  createEtudiant(data: Etudiant) {
    const payload = {
      ...data
    };
    this.store.dispatch(new EtudiantListeModule.LoadCreateEtudiant(payload));
    // this.etudiantForm.reset();
    this.router.navigateByUrl('/etudiant');
  }
}
