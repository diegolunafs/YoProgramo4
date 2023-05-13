import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';


@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit{

  proyecto: Proyecto = new Proyecto("","","")
  static id: number = 0

  constructor(private sProyecto: ProyectosService, private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService){}

  ngOnInit(): void{   
  }

  onCreate(): void{
    
    this.proyecto.img = this.imageService.url
    this.sProyecto.save(this.proyecto).subscribe( data =>{
      alert("Proyecto añadido correctamente...")
      this.router.navigate([''])
    }, err =>{
      alert("Ups, creo que ocurrio un problema. Intenta nuevamente");
        this.router.navigate(['']); 
    })
  }
  


  uploadImage($event: any){
    NewProyectosComponent.id++
    const name = "proyecto_" + NewProyectosComponent.id
    this.imageService.uploadImage($event, name)
  }
}

