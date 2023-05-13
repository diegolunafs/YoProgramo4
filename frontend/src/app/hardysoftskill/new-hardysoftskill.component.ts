import { Component } from '@angular/core';
import { HardysoftskillService } from '../service/hardysoftskill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardysoftskill } from '../model/hardysoftskill';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-new-hardysoftskill',
  templateUrl: './new-hardysoftskill.component.html',
  styleUrls: ['./new-hardysoftskill.component.css']
})
export class NewHardysoftskillComponent {

  hyss: Hardysoftskill = new Hardysoftskill("",0,"")

  constructor(private sHyss: HardysoftskillService, private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService){}

  ngOnInit(): void{   
  }

  onCreate(): void{
    this.hyss.img = this.imageService.url
    this.sHyss.save(this.hyss).subscribe( data =>{
      alert("Habilidad añadida...")
      this.router.navigate([''])
    }, err =>{
      alert("Ups, creo que ocurrio un problema. Intenta nuevamente");
        this.router.navigate(['']); 
    })
  }

  uploadImage($event: any){
    const id = this.activateRouter.snapshot.params['id']
    const name = "hyss_" + id
    this.imageService.uploadImage($event, name)
  }
}
