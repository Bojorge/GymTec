import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GeneralsettingsComponent } from './pages/generalsettings/generalsettings.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { PuestosplanillaComponent } from './pages/puestosplanilla/puestosplanilla.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CrearclaseComponent } from './pages/crearclase/crearclase.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';

//rutas de las paginas
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'}, //componente inicial (se redirecciona al login)
  { path:'login', component:LoginComponent}, //se idica la ruta para llegar o utilizar un componente
  { path:'register', component:RegisterComponent},
  { path:'generalsettings', component:GeneralsettingsComponent},
  { path:'recepcion', component:RecepcionComponent},
  { path:'productos', component:ProductosComponent},
  { path:'sucursales', component:SucursalesComponent},
  { path:'puestosplanilla', component:PuestosplanillaComponent},
  { path:'empleados', component:EmpleadosComponent},
  { path:'servicios', component:ServiciosComponent},
  { path:'equipo', component:EquipoComponent},
  { path:'crearclase', component:CrearclaseComponent},
  { path:'calendario', component:CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//se exportan los componentes para que se puedan redireccionar
export const routingComponents=[LoginComponent,RegisterComponent, GeneralsettingsComponent,
RecepcionComponent, ProductosComponent, SucursalesComponent, PuestosplanillaComponent, EmpleadosComponent,
ServiciosComponent, EquipoComponent, CrearclaseComponent, CalendarioComponent]