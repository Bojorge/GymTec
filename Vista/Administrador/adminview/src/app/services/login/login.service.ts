import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Validar } from '../../models/Validar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private APIurl="https://localhost:5001/api/login";
  
  constructor(private http: HttpClient) { }

  validate(validar: Validar): Observable<Boolean> {
    return this.http.post<Boolean>(this.APIurl,validar);
  }
}
