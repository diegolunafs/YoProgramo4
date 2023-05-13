import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  
  proyectos: Proyecto[] = []
  isLogged = false

  constructor(private sProyecto: ProyectosService, private tokenService: TokenService){}

  ngOnInit(): void{
    this.cargaHyss()
    if(this.tokenService.getToken()){
      this.isLogged = true
    } else {
      this.isLogged = false
    }
  }

  cargaHyss(): void{
    this.sProyecto.lista().subscribe(data => {this.proyectos = data})
  }

  delete(id: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(data => {
        this.cargaHyss()
        alert("Proyecto eliminado correctamente.")
      }, err =>{
        alert("No se pudo eliminar el proyecto.")
      })
    }
  }
}
