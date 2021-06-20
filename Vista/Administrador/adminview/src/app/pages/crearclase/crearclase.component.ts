import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/models/Clase';
import { RecepcionService } from 'src/app/services/recepcion/recepcion.service';

@Component({
  selector: 'app-crearclase',
  templateUrl: './crearclase.component.html',
  styleUrls: ['./crearclase.component.css']
})
export class CrearclaseComponent implements OnInit {

  clases: Clase[];
  

  constructor(private rs: RecepcionService) { 
    this.clases=[]
  }

  ngOnInit(): void {
    this.rs.allclases().subscribe((cls: Clase[]) => {
      this.clases=cls
    });
  }

  crearclase(clase: Clase){
    this.rs.newclase(clase).subscribe();
  }

}
