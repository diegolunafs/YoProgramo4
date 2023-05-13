import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { HardysoftskillComponent } from './hardysoftskill/hardysoftskill.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercademiComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    EstudiosComponent,
    ExperienciaLaboralComponent,
    HardysoftskillComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
