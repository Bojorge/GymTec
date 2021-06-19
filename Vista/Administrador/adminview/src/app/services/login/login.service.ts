import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Validar } from '../../models/Validar';
import { Colaborador } from '../../models/Colaborador';

@Injectable({
  providedIn: 'root'
})

//este servicio se conecta con 2 controladores del API para validar y registrar quien esta en el sistema
export class LoginService {

  //url's para comunicarse con los controladores del API
  private APIlogin="https://localhost:44347/api/login";
  private APIul="https://localhost:44347/api/usuariologeado";
  
  //se usa como parametro del metodo contructor un objeto de ese tipo para poder utilizar los metodos get, post, update y delete (CrUD)
  constructor(private http: HttpClient) { }

  //este metodo recibe como parametros un objeto que encapsula el correo y contraseña que se ingresan para logearse
  validate(validar: Validar): Observable<Boolean> {
    return this.http.post<Boolean>(this.APIlogin,validar);
  }

  //este metodo regresa el usuario logeado en el momento
  usuarioLogeado():Observable<Colaborador> {
    return this.http.get<Colaborador>(this.APIul);
  }  

  //vacia todos los usuarios que puedan estar almacenados como usuarios actuales, para controlar quien esta logeado
  vaciarEspacio() {
    this.http.delete(this.APIul).subscribe();
  }  
}
