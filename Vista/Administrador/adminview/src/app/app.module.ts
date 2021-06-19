import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { GeneralsettingsComponent } from './pages/generalsettings/generalsettings.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { PuestosplanillaComponent } from './pages/puestosplanilla/puestosplanilla.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { CrearclaseComponent } from './pages/crearclase/crearclase.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GeneralsettingsComponent,
    ProductosComponent,
    RecepcionComponent,
    SucursalesComponent,
    PuestosplanillaComponent,
    EmpleadosComponent,
    ServiciosComponent,
    EquipoComponent,
    CrearclaseComponent,
    CalendarioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
