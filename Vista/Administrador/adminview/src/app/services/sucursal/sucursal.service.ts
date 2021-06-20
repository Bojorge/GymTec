import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal } from 'src/app/models/Sucursal';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  
  DeleteURL = "";
  private APIurl="https://localhost:44347/api/sucursal";

  constructor( private http: HttpClient ) {
   }

  defaultsucursal(sucursal: Sucursal): Observable<Sucursal>{
    return this.http.post<Sucursal>(this.APIurl, sucursal);
    //con spa y tienda no activos
  }

  allsucursales(): Observable<Sucursal[]>{
    return this.http.get<Sucursal[]>(this.APIurl);
  }

  deletesucursal(sucursal: string): Observable<{}>{
    //this.APIurl = '${this.APIurl}/${sucursal}';
    this.DeleteURL = this.APIurl.concat(sucursal);
    return this.http.delete(this.DeleteURL);
  }

  editsucursal(sucursal: Sucursal): Observable<Sucursal>{
    return this.http.put<Sucursal>(this.APIurl, sucursal)
  }

}
