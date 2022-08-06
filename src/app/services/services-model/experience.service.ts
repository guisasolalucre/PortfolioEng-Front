import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/model/Experience';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private url = "https://lucrecia-guisasola-portfolioen.herokuapp.com"
  
  constructor(
    private http: HttpClient
  ) { }

  listExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.url}/listExperience`);
  }

  deleteExperience(exp: Experience):Observable<Experience>{
    return this.http.delete<Experience>(`${this.url}/deleteExperience/${exp.id}`)
  }

  newExperience(exp:Experience):Observable<Experience>{
    return this.http.post<Experience>(`${this.url}/newExperience`, exp, httpOptions)
  }

  editExperience(exp:Experience):Observable<Experience>{
    return this.http.put<Experience>(`${this.url}/editExperience/${exp.id}`, exp, httpOptions)
  }
}
