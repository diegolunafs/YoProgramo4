import { Component, OnInit } from '@angular/core';
import { Hardysoftskill } from '../model/hardysoftskill';
import { HardysoftskillService } from '../service/hardysoftskill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hardysoftskill',
  templateUrl: './hardysoftskill.component.html',
  styleUrls: ['./hardysoftskill.component.css']
})
export class HardysoftskillComponent implements OnInit{
  
    hyss: Hardysoftskill[] = []
    isLogged = false
  
    constructor(private sHyss: HardysoftskillService, private tokenService: TokenService){}
  
    ngOnInit(): void{
      this.cargaHyss()
      for(let item of this.hyss){
        console.log("Item: " + item.nombre)
      }
      if(this.tokenService.getToken()){
        this.isLogged = true
      } else {
        this.isLogged = false
      }
    }
  
    cargaHyss(): void{
      this.sHyss.lista().subscribe(data => {this.hyss = data})
    }
  
    delete(id: number){
      if(id != undefined){
        this.sHyss.delete(id).subscribe(data => {
          this.cargaHyss()
          alert("Habilidad eliminada correctamente.")
        }, err =>{
          alert("No se pudo eliminar la habilidad.")
        })
      }
    }
}
