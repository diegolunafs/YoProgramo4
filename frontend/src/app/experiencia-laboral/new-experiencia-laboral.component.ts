import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from '../service/experiencia-laboral.service';


@Component({
  selector: 'app-new-experiencia-laboral',
  templateUrl: './new-experiencia-laboral.component.html',
  styleUrls: ['./new-experiencia-laboral.component.css']
})
export class NewExperienciaLaboralComponent implements OnInit {
  
  nombreE!: string
  descripcionE!: string
  exp!: ExperienciaLaboral

  constructor(private sExperiencia: ExperienciaLaboralService, private router:Router) { }

  ngOnInit(): void {
  
  }

  onCreate(): void{
    this.exp = new ExperienciaLaboral(this.nombreE, this.descripcionE)
    this.sExperiencia.save(this.exp).subscribe(
      data => {
        alert("Experiencia añadida"); 
        this.router.navigate(['']);
      }, 
      err => {
        alert("Ups, creo que ocurrio un problema. Intenta nuevamente");
        this.router.navigate(['']);    
      }
    )
    }
}
