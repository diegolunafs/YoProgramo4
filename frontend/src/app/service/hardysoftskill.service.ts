import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardysoftskill } from '../model/hardysoftskill';

@Injectable({
  providedIn: 'root'
})
export class HardysoftskillService {

  URL = "http://localhost:8080/hyss/" 


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hardysoftskill[]>{
    return this.httpClient.get<Hardysoftskill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Hardysoftskill>{
    return this.httpClient.get<Hardysoftskill>(this.URL + `detail/${id}`)
  }

  public save(hyss: Hardysoftskill): Observable<any>{
    return this.httpClient.post<any>(this.URL + "create", hyss);  
  }

  public update(id: number, hyss: Hardysoftskill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, hyss);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
