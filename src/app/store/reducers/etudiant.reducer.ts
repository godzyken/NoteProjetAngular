import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Etudiant} from '../../etudiant/etudiants.interface';
import {EtudiantListeModule} from '../actions/etudiant.action';
import {createStore} from 'redux';


export interface EtudiantListStateEntity extends EntityState<Etudiant> {
  loading: boolean;
  loaded: boolean;
  selectEtudiant: Etudiant;
  logs: {
    type: string;
    message: string;
  };
}

export const EtudiantListAdapter: EntityAdapter<Etudiant> = createEntityAdapter<Etudiant>({
  sortComparer: false
});

export const initialState: EtudiantListStateEntity = EtudiantListAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectEtudiant: undefined,
  logs: undefined
});

export const {
  selectIds: selectEtudiantsIds,
  selectEntities: selectEtudiantsEntities,
  selectAll: selectEtudiants,
  selectTotal: selectTotalEtudiants
} = EtudiantListAdapter.getSelectors();

export function etudiantsReducer(
  state = initialState,
  action: EtudiantListeModule.Actions
): EtudiantListStateEntity {

  switch (action.type) {

    case EtudiantListeModule.ActionTypes.LOAD_INIT_ETUDIANTS:
      // Passe le loading a true
      return <EtudiantListStateEntity>{
        ...state, loading: true
      };

    case EtudiantListeModule.ActionTypes.SUCCESS_INIT_ETUDIANTS:
      // Passe le loadin a false et le load a true
      return {
        ...EtudiantListAdapter.addMany(action.payload, state),
        loading: false,
        loaded: true
      };

    case EtudiantListeModule.ActionTypes.LOAD_DELETE_ETUDIANT:
      return {
        ...state,
        loading: true
      };

    case EtudiantListeModule.ActionTypes.SUCCESS_DELETE_ETUDIANT:
      return {
        ...EtudiantListAdapter.removeOne(action.payload, state),
        logs: {
          type: 'SUCCESS', message: 'L\'Etudiant a été supprimée avec succès'
        }
      };

    case EtudiantListeModule.ActionTypes.LOAD_CREATE_ETUDIANT:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case EtudiantListeModule.ActionTypes.SUCCESS_CREATE_ETUDIANT:
      // Passe le loading a false et ajoute un etudiant
      return {
        ...EtudiantListAdapter.addOne(action.payload, state),
        loading: false,
        logs: {
          type: 'SUCCESS', message: 'L\'etudiant a été créée avec succès'
        }
      };

    case EtudiantListeModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: action.payload.message},
        loading: false
      };

    default:
      return state;
  }
}
