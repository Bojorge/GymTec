import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maquina } from 'src/app/models/Maquina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private APIurl="https://localhost:44347/api/maquina";
  
  constructor(private http: HttpClient) { }

  maquinas(): Observable<Maquina> {
    return this.http.get<Maquina>(this.APIurl);
  }
}
