import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Cliente } from '../../models/Cliente';
import { Registro } from '../../models/Registro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs:RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(reg: Registro){
    if(reg.contrasena!="" && reg.contrasena==reg.confirmar && reg.cedula!="" && reg.correo!="" && reg.nombre!="" && reg.apellido1!="" && reg.apellido2!="" && reg.provincia!="" && reg.canton!="" && reg.distrito!="" && reg.fecha_nacimiento!="" && reg.edad!="" && reg.peso!="" && reg.imc!=""){
      let client: Cliente;

      client={
        Id: "",
        cedula: reg.cedula,
        correo: reg.correo,
        contrasena: reg.contrasena,
        nombre: reg.nombre,
        apellido1: reg.apellido1,
        apellido2: reg.apellido2,
        provincia: reg.provincia,
        canton: reg.canton,
        distrito: reg.distrito,
        fecha_nacimiento: reg.fecha_nacimiento,
        edad: reg.edad,
        peso: reg.peso,
        imc: reg.imc
      }

      this.rs.addNewUser(client).subscribe((x: Cliente)=> {
        console.log(x)
      });

      this.router.navigate(['/login']); //cuando se ha completado el registro, se regresa a la pagina de login
    }
    else{
      console.log("las contraseñas no coinciden o hay campos vacios");
      console.log(">"+reg.contrasena +"<  >"+ reg.confirmar +"<  "+ reg.cedula +"  "+ reg.correo +"  "+ reg.nombre +"  "+ reg.apellido1 +"  "+ reg.apellido2 +"  "+ reg.provincia +"  "+ reg.canton +"  "+ reg.distrito +"  "+ reg.fecha_nacimiento +"  "+ reg.edad +"  "+ reg.peso +"  "+ reg.imc);
      
    }
   
  }

}
