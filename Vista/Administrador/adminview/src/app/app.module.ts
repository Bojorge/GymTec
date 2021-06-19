import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { GeneralsettingsComponent } from './pages/generalsettings/generalsettings.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SpinningComponent } from './pages/spinning/spinning.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesComponent,
    RegisterComponent,
    GeneralsettingsComponent,
    ProductosComponent,
    SpinningComponent,
    RecepcionComponent,
    RutinasComponent
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
