import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit{
  persona: Persona = new Persona('','','','')
  isLogged = false
  
  constructor(public personaService: PersonaService, private tokenService: TokenService, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPersona()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarPersona(){
   this.personaService.detail(1).subscribe(data=> {this.persona = data})
  }
}
