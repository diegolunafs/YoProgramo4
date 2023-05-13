import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit {
  
  estudios: Estudios = new Estudios("","")

  constructor(private sEstudio: EstudiosService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id']
    this.sEstudio.detail(id).subscribe(data =>{
      this.estudios = data
    },
    err =>{
      alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
      this.router.navigate([''])
    })
  }

    onUpdate(): void{
      const id = this.activateRouter.snapshot.params['id']
      this.sEstudio.update(id, this.estudios).subscribe( data =>{
        alert("El Estudio se ha actualizado con éxito...")
        this.router.navigate([''])
      },
      err =>{
        alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
        this.router.navigate([''])
      })
    }
  

}
