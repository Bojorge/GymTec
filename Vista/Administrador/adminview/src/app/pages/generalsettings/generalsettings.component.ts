import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generalsettings',
  templateUrl: './generalsettings.component.html',
  styleUrls: ['./generalsettings.component.css']
})
export class GeneralsettingsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sucursales(){
    this.router.navigate(['/sucursales']); //redirecciona a la pagina para gestionar sucursales
  }

  puestosplanilla(){
    this.router.navigate(['/puestosplanilla']); //redirecciona a la pagina para gestionar puestos y planilla
  }

  empleados(){
    this.router.navigate(['/empleados']); //redirecciona a la pagina para gestionar los empleados
  }

  servicios(){
    this.router.navigate(['/servicios']); //redirecciona a la pagina para gestionar los servicios
  }

  equipo(){
    this.router.navigate(['/equipo']); //redirecciona a la pagina gestionar el equipo de los gimnasios
  }

  productos(){
    this.router.navigate(['/productos']); //redirecciona a la pagina para gestionar productos e inventario
  }

}
