import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit{
  proyecto!: Proyecto
  name!: string
  
  constructor(private sProyecto: ProyectosService,  private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params["id"]
    this.sProyecto.detail(id).subscribe(data =>{
      this.proyecto = data
      this.name = this.proyecto.nombre
    },
    err =>{
      alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
      this.router.navigate([''])
    })
  }

  onUpdate(){
    const id = this.activateRouter.snapshot.params['id']
    this.proyecto.img = this.imageService.url
      this.sProyecto.update(id, this.proyecto).subscribe( data =>{
        alert("El proyecto se ha modificado correctamente...")
        this.router.navigate([''])
      },
      err =>{
        alert(err)
        this.router.navigate([''])
      })
  }

  uploadImage($event: any){
    this.imageService.uploadImage($event, this.name)
  }

}
