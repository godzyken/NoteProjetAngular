import {HttpErrorResponse} from '@angular/common/http';
import {Etudiant} from '../../etudiant/etudiants.interface';
import {createStore} from 'redux';

export namespace EtudiantListeModule {


  export enum ActionTypes {
    LOAD_INIT_ETUDIANTS = '[etudiantList] Load Init Etudiants',
    SUCCESS_INIT_ETUDIANTS = '[etudiantList] Success Init Etudiants',
    LOAD_DELETE_ETUDIANT = '[todoList] Load Delete Etudiant',
    SUCCESS_DELETE_ETUDIANT = '[todoList] Success Delete Etudiant',
    LOAD_CREATE_ETUDIANT = '[etudiantList] Load Create Etudiant',
    SUCCESS_CREATE_ETUDIANT = '[etudiantList] Success Create Etudiant',
    ERROR_LOAD_ACTION = '[etudiantList] Error Load Action'
  }

  export class LoadInitEtudiants {
    readonly type = ActionTypes.LOAD_INIT_ETUDIANTS;
  }

  export class SuccessInitEtudiants {
    readonly type = ActionTypes.SUCCESS_INIT_ETUDIANTS;

    constructor(public payload: Etudiant[]) {
    }
  }

  export class LoadDeleteEtudiant {
    readonly type = ActionTypes.LOAD_DELETE_ETUDIANT;

    constructor(public payload: number) {
    }
  }

  export class SuccessDeleteEtudiant {
    readonly type = ActionTypes.SUCCESS_DELETE_ETUDIANT;

    constructor(public payload: number) {
    }
  }


  export class LoadCreateEtudiant {
    readonly type = ActionTypes.LOAD_CREATE_ETUDIANT;

    constructor(public payload: Etudiant) {
    }
  }

  export class SuccessCreateEtudiant {
    readonly type = ActionTypes.SUCCESS_CREATE_ETUDIANT;

    constructor(public payload: Etudiant) {
    }
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;

    constructor(public payload: HttpErrorResponse) {
    }
  }

  export type Actions = LoadInitEtudiants | ErrorLoadAction | SuccessInitEtudiants
    | LoadCreateEtudiant | SuccessCreateEtudiant | LoadDeleteEtudiant | SuccessDeleteEtudiant;

}
