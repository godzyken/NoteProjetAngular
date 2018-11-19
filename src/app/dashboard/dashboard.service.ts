import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  loadDashboard$() {
    return this.httpClient.get(`${environment.apiUrl}/`);
  }
}
