import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private APIurl="https://localhost:5001/api/client";

  constructor(private http: HttpClient) { }

  addNewUser(client: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.APIurl,client);
  }
}
