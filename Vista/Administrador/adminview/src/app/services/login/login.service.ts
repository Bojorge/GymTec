import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Validar } from '../../models/Validar';
import { Colaborador } from '../../models/Colaborador';

@Injectable({
  providedIn: 'root'
})

//este servicio hace un post en el controlador del login que esta en el api para validar los datos ingresador
export class LoginService {

  private APIlogin="https://localhost:44347/api/login";
  private APIul="https://localhost:44347/api/usuariologeado";
  
  constructor(private http: HttpClient) { }

  validate(validar: Validar): Observable<Boolean> {
    return this.http.post<Boolean>(this.APIlogin,validar);
  }

  
  usuarioLogeado():Observable<Colaborador> {
    return this.http.get<Colaborador>(this.APIul);
  }  

  vaciarEspacio() {
    this.http.delete(this.APIul).subscribe();
  }  
}
