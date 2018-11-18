import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Etudiant} from './etudiants.interface';

@Injectable()
export class EtudiantService {
  constructor(private http: HttpClient) {
  }

  getEtudiant(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${environment.apiUrl}/etudiants`);
  }

  createEtudiant(body): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${environment.apiUrl}/etudiants`, body);
  }

  deleteEtudiant(id): Observable<number> {
    return this.http.post<Etudiant>(`${environment.apiUrl}/etudiants/delete`, {'id': id})
      .pipe(map(response => id));
  }
}
