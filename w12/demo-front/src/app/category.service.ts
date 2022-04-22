import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Category} from './models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URl = 'https://qurban.kz:8000/kk';
  // BASE_URl = 'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  login(phoneNumber, password): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URl}/api/auth/login/`, {
      phone_number: phoneNumber,
      password
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URl}/api/categories/`);
  }
}
