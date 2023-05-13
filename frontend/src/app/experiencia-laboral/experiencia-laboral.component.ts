import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { TokenService } from 'src/app/service/token.service';
import { ExperienciaLaboralService } from '../service/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experienciaLaboral: ExperienciaLaboral[] = [];
  isLogged = false

  constructor(private sExperienciaLaboral: ExperienciaLaboralService, private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.cargaExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargaExperiencia(): void{
    this.sExperienciaLaboral.lista().subscribe( data => {this.experienciaLaboral = data});
  }

  delete(id: number){
    if(id != undefined){
      this.sExperienciaLaboral.delete(id).subscribe(data =>{
        this.cargaExperiencia()
        alert("La experiencia se borró exitosamente...")
      },err =>{
        alert("No se pudo borrar la experiencia.")
      })
    }
  }

}
