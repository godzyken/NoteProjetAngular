import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(payload: { username: string; password: string; }) {
    return this.httpClient.post(`${environment.apiUrl}/login`, payload);
  }

  logout() {
    return this.httpClient.get(`${environment.apiUrl}/`);
  }
}
