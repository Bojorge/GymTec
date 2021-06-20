import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase } from 'src/app/models/Clase';

@Injectable({
  providedIn: 'root'
})
export class RecepcionService {

  private APIurl="https://localhost:44347/api/clase";
  constructor( private http: HttpClient ) { }

  allclases(): Observable<Clase[]>{
    return this.http.get<Clase[]>(this.APIurl);
  }


  newclase(sucursal: Clase): Observable<Clase>{
    return this.http.post<Clase>(this.APIurl, sucursal);
  }
}
