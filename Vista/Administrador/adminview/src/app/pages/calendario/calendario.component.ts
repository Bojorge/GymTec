import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/models/Clase';
import { RecepcionService } from 'src/app/services/recepcion/recepcion.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  clases: Clase[];
  constructor(private rs: RecepcionService) { 
    this.clases=[]
  }

  ngOnInit(): void {
    this.rs.allclases().subscribe((cls: Clase[]) => {
      this.clases=cls
    });
  }

}
