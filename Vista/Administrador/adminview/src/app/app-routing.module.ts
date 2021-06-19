import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GeneralsettingsComponent } from './pages/generalsettings/generalsettings.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component';
import { SpinningComponent } from './pages/spinning/spinning.component';

//rutas de las paginas
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'}, //componente inicial (se redirecciona al login)
  { path:'login', component:LoginComponent}, //se idica la ruta para llegar o utilizar un componente
  { path:'register', component:RegisterComponent},
  { path:'generalsettings', component:GeneralsettingsComponent},
  { path:'recepcion', component:RecepcionComponent},
  { path:'productos', component:ProductosComponent},
  { path:'rutinas', component:RutinasComponent},
  { path:'spinning', component:SpinningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//se exportan los componentes para que se puedan redireccionar
export const routingComponents=[LoginComponent,RegisterComponent, GeneralsettingsComponent,
RecepcionComponent, ProductosComponent, RutinasComponent, SpinningComponent]