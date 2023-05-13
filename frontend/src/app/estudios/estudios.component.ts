import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from '../service/estudios.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  estudios: Estudios[] = []
  isLogged = false

  constructor(private sEstudios: EstudiosService, private tokenService: TokenService) { }  

  ngOnInit(): void {
    this.cargaEstudio();
    if(this.tokenService.getToken()){
      this.isLogged = true
    }else{
      this.isLogged = false
    }
  }

  cargaEstudio(): void{
    this.sEstudios.lista().subscribe(data => {this.estudios = data})
  }

  delete(id: number){
    if(id != undefined){
      this.sEstudios.delete(id).subscribe(data =>{
        this.cargaEstudio()
        alert("Estudio eliminado correctamente")
      },
      err =>{
        alert("Ups! El estudio no pudo ser eliminado, intente nuevamente.")
      })
    }
  }
}
