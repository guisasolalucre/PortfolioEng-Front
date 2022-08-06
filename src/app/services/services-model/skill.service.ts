import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/Skill';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private url = "https://lucrecia-guisasola-portfolioen.herokuapp.com"
  
  constructor(
    private http: HttpClient
  ) { }

  listSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.url}/listSkills`);
  }

  deleteSkill(hab: Skill):Observable<Skill>{
    return this.http.delete<Skill>(`${this.url}/deleteSkill/${hab.id}`)
  }

  newSkill(hab:Skill):Observable<Skill>{
    return this.http.post<Skill>(`${this.url}/newSkill`, hab, httpOptions)
  }

  editSkill(hab:Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.url}/editSkill/${hab.id}`, hab, httpOptions)
  }
}
