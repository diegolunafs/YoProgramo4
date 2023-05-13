import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = "http://localhost:8080/proyectos/" 


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`)
  }

  public save(hyss: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + "create", hyss);  
  }

  public update(id: number, hyss: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, hyss);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
