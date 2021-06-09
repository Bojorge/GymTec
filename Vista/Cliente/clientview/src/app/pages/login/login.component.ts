import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validar } from 'src/app/models/Validar';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  public register() { 
    this.router.navigate(['/register']); //redirecciona a la pagina de registro
  }

  public validate(validar: Validar)
  {
    this.ls.validate(validar).subscribe((acceso: Boolean)=> {
      if(acceso==true){
        this.router.navigate(['/activities']); //redirecciona a la pagina de actividades
      }
      else{
        console.log("no tiene acceso, debe registrarse")
      }
      console.log(acceso)
    });
  }

}
