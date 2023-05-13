import { Component, OnInit } from '@angular/core';
import { HardysoftskillService } from '../service/hardysoftskill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../service/image.service';
import { Hardysoftskill } from '../model/hardysoftskill';

@Component({
  selector: 'app-edit-hardysoftskill',
  templateUrl: './edit-hardysoftskill.component.html',
  styleUrls: ['./edit-hardysoftskill.component.css']
})
export class EditHardysoftskillComponent implements OnInit{
  hyss!: Hardysoftskill
  
  constructor(private sHyss: HardysoftskillService,  private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params["id"]
    this.sHyss.detail(id).subscribe(data =>{
      this.hyss = data
    },
    err =>{
      alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
      this.router.navigate([''])
    })
  }

  onUpdate(){
    const id = this.activateRouter.snapshot.params['id']
    this.hyss.img = this.imageService.url
      this.sHyss.update(id, this.hyss).subscribe( data =>{
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
    const name = "hyss_" + id
    this.imageService.uploadImage($event, name)
  }

}
