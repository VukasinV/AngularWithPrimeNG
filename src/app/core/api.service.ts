import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  URL_API = environment.LOCAL_API;

  postUser(user) {
    return this.http.post(`${this.URL_API}/User`, user);
  }

  postAccount(credentials) {
    return this.http.post(`${this.URL_API}/Account`, {},
  { headers: {
    'username': credentials.username,
    'password': credentials.password
  }});
}

  getProfilesByName (fullname: string) {
    return this.http.get(`${this.URL_API}/Profile?fullname=${fullname}`);
    // .map((data: any) => data as string [])   i Observable<string[]> kao povratni tip
  }

  test(file) {
    return this.http.post(`${this.URL_API}/Test`, file);
  }

  getImage() {
    return this.http.get(`${this.URL_API}/Test`, { 'responseType': 'blob' as 'json' });
  }
}
