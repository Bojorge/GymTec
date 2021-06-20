import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/models/Sucursal';
import { SucursalService } from 'src/app/services/sucursal/sucursal.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  sucursales: Sucursal[];
  nombres: string[];
  eliminar: string = '0';
  verSeleccion: string = '';
    
  constructor(private ss: SucursalService) { 
    this.sucursales=[]
    this.nombres=[];
  }

  ngOnInit(): void {
    this.ss.allsucursales().subscribe((gyms: Sucursal[]) => {
      this.sucursales=gyms
      for (let suc of this.sucursales){
        this.nombres.push(suc.nombre)
      }
    });
  }

  sucursaldefault(sucursal: Sucursal){
    this.ss.defaultsucursal(sucursal).subscribe();
  }

  deletesucursal(sucursal: string){
    this.ss.deletesucursal(sucursal).subscribe();
  }

}
