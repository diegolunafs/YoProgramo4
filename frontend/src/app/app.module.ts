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
import { EditAcercademiComponent } from './acercademi/edit-acercademi.component';
import { NewEstudioComponent } from './estudios/new-estudio.component';
import { EditEstudioComponent } from './estudios/edit-estudio.component';
import { EditExperienciaLaboralComponent } from './experiencia-laboral/edit-experiencia-laboral.component';
import { NewExperienciaLaboralComponent } from './experiencia-laboral/new-experiencia-laboral.component';

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
    FooterComponent,
    EditAcercademiComponent,
    NewEstudioComponent,
    EditEstudioComponent,
    EditExperienciaLaboralComponent,
    NewExperienciaLaboralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
