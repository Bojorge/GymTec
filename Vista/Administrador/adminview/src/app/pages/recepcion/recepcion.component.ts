import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  nuevaclase(){
    this.router.navigate(['/crearclase']); //redirecciona a la pagina de crear nuevas clases
  }

  calendario(){
    this.router.navigate(['/calendario']); //redirecciona a la pagina del calendario de actividades
  }

}
