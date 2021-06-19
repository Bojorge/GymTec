import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validar } from '../../models/Validar';
import { LoginService } from 'src/app/services/login/login.service';

import { MaquinaService } from 'src/app/services/maquina/maquina.service';
import { Maquina } from '../../models/Maquina';
import { Colaborador } from 'src/app/models/Colaborador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //el constructor recibe como parametros una instacia del servicio que se comunica con el API y un Router para poder redireccionar paginas entre si mismas
  constructor(private ls:LoginService, private router:Router) {
    this.ls.vaciarEspacio() 
   }

  ngOnInit(): void { }

  //este metodo redirecciona a la pagina de registro
  public register() { 
    this.router.navigate(['/register']); 
  }

  //este metodo recibe un objeto a validar, cuyo 2 atributos son usuario y contraseña
  public validate(validar: Validar)
  {    
    this.ls.vaciarEspacio() 
    //emplea un metodo del mismo nombre que proviene del servicio que hace el post para enviar el obtejo y recibir un valor booleano
    this.ls.validate(validar).subscribe((acceso: Boolean)=> {
      if(acceso==true){ //si la respuesta es verdadera va a la siguiente pagina dependiendo del rol
        this.ls.usuarioLogeado().subscribe((user: Colaborador)=> {
          if(user.rol==2222){
            this.router.navigate(['/generalsettings']); //redirecciona a la pagina de ajustes generales
          }
          else if(user.rol==1767){
            this.router.navigate(['/productos']); //redirecciona a la pagina de productos
          }
          else if(user.rol==1692){
            this.router.navigate(['/spinning']); //redirecciona a la pagina de spinning
          }
          else if(user.rol==1347){
            this.router.navigate(['/recepcion']); //redirecciona a la pagina de recepcion
          }
          else if(user.rol==1795){
            this.router.navigate(['/rutinas']); //redirecciona a la pagina de rutinas
          }
        })

      }
      else{ //si es falso hará una advertencia
        console.log("no tiene acceso, debe registrarse")
      }
      console.log(acceso) //imprime en consola el valor booleano de la variable acceso
    });
  }

}
