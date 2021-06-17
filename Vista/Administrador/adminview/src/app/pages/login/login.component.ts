import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validar } from '../../models/Validar';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //el constructor recibe como parametros una instacia del servicio que se comunica con el API y un Router para poder redireccionar paginas entre si mismas
  constructor(private ls:LoginService, private router:Router) { }

  ngOnInit(): void { }

  //este metodo redirecciona a la pagina de registro
  public register() { 
    this.router.navigate(['/register']); 
  }

  //este metodo recibe un objeto a validar, cuyo 2 atributos son usuario y contraseña
  public validate(validar: Validar)
  {
    //emplea un metodo del mismo nombre que proviene del servicio que hace el post para enviar el obtejo y recibir un valor booleano
    this.ls.validate(validar).subscribe((acceso: Boolean)=> {
      if(acceso==true){ //si la respuesta es verdadera va a la siguiente pagina
        this.router.navigate(['/generalsettings']); //redirecciona a la pagina de actividades
      }
      else{ //si es falso hará una advertencia
        console.log("no tiene acceso, debe registrarse")
      }
      console.log(acceso) //imprime en consola el valor booleano de la variable acceso
    });
  }

}
