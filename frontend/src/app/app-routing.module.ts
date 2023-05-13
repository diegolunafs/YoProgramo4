import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EditAcercademiComponent } from './acercademi/edit-acercademi.component';

const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'editacercademi/:id', component: EditAcercademiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }