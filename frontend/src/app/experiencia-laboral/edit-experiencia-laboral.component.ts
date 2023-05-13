import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from '../service/experiencia-laboral.service';


@Component({
  selector: 'app-edit-experiencia-laboral',
  templateUrl: './edit-experiencia-laboral.component.html',
  styleUrls: ['./edit-experiencia-laboral.component.css']
})
export class EditExperienciaLaboralComponent implements OnInit {
  experienciaLaboral: ExperienciaLaboral = new ExperienciaLaboral("","")

  constructor(private sExperiencia: ExperienciaLaboralService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.sExperiencia.detail(id).subscribe(data =>{
        this.experienciaLaboral = data
      },
      err =>{
        alert("Error al modificar la experiencia")
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id']
    this.sExperiencia.update(id, this.experienciaLaboral).subscribe(data => {
        this.router.navigate([''])
      },
      err => {
        alert("Error al modificar experiencia")
        this.router.navigate([''])
      }
    )
  }
}
