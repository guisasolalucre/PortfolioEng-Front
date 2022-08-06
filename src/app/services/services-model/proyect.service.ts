import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from 'src/app/model/Proyect';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  private url = "https://lucrecia-guisasola-portfolioen.herokuapp.com"
  
  constructor(
    private http: HttpClient
  ) { }

  listProyects(): Observable<Proyect[]>{
    return this.http.get<Proyect[]>(`${this.url}/listProyects`);
  }

  deleteProyect(proy: Proyect):Observable<Proyect>{
    return this.http.delete<Proyect>(`${this.url}/deleteProyect/${proy.id}`)
  }

  newProyect(proy:Proyect):Observable<Proyect>{
    return this.http.post<Proyect>(`${this.url}/newProyect`, proy, httpOptions)
  }

  editProyect(proy:Proyect):Observable<Proyect>{
    return this.http.put<Proyect>(`${this.url}/editProyect/${proy.id}`, proy, httpOptions)
  }
}
