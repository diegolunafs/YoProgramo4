import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercademi',
  templateUrl: './edit-acercademi.component.html',
  styleUrls: ['./edit-acercademi.component.css']
})
export class EditAcercademiComponent implements OnInit {
  persona: Persona = new Persona('','','','')
  
  constructor(private sPersona: PersonaService,  private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    /* const id = this.activateRouter.snapshot.params["id"] */
    this.sPersona.detail(1).subscribe(data =>{
      this.persona = data
    },
    err =>{
      alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
      this.router.navigate([''])
    })
  }

  onUpdate(){
    const id = this.activateRouter.snapshot.params['id']
    this.persona.img = this.imageService.url
      this.sPersona.update(id, this.persona).subscribe( data =>{
        alert("El perfil se ha modificado correctamente...")
        this.router.navigate([''])
      },
      err =>{
        alert(err)
        this.router.navigate([''])
      })
  }

  uploadImage($event: any){
    const id = this.activateRouter.snapshot.params['id']
    const name ="perfil_" + id
    this.imageService.uploadImage($event, name)
  }

}
