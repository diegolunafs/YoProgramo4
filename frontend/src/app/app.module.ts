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
import { EditHardysoftskillComponent } from './hardysoftskill/edit-hardysoftskill.component';
import { NewHardysoftskillComponent } from './hardysoftskill/new-hardysoftskill.component';
import { EditProyectosComponent } from './proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './proyectos/new-proyectos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    NewExperienciaLaboralComponent,
    EditHardysoftskillComponent,
    NewHardysoftskillComponent,
    EditProyectosComponent,
    NewProyectosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
