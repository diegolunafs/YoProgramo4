import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EditAcercademiComponent } from './acercademi/edit-acercademi.component';
import { LoginComponent } from './login/login.component';
import { NewExperienciaLaboralComponent } from './experiencia-laboral/new-experiencia-laboral.component';
import { EditEstudioComponent } from './estudios/edit-estudio.component';
import { NewEstudioComponent } from './estudios/new-estudio.component';
import { EditExperienciaLaboralComponent } from './experiencia-laboral/edit-experiencia-laboral.component';
import { NewHardysoftskillComponent } from './hardysoftskill/new-hardysoftskill.component';
import { EditHardysoftskillComponent } from './hardysoftskill/edit-hardysoftskill.component';
import { NewProyectosComponent } from './proyectos/new-proyectos.component';
import { EditProyectosComponent } from './proyectos/edit-proyectos.component';

const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'editacercademi/:id', component: EditAcercademiComponent},
    {path: 'newestudio', component: NewEstudioComponent},
    {path: 'editestudio/:id', component: EditEstudioComponent},
    {path: 'newexperiencialab', component: NewExperienciaLaboralComponent},
    {path: 'editexperiencialab/:id', component: EditExperienciaLaboralComponent},
    {path: 'newhyss', component: NewHardysoftskillComponent},
    {path: 'edithyss/:id', component: EditHardysoftskillComponent},
    {path: 'newproyecto', component: NewProyectosComponent},
    {path: 'editproyecto/:id', component: EditProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }