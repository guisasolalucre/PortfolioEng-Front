import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/model/Education';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private url = "https://lucrecia-guisasola-portfolioen.herokuapp.com"
  
  constructor(
    private http: HttpClient
  ) { }

  listEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(`${this.url}/listEducation`);
  }

  deleteEducation(edu: Education): Observable<Education>{
    return this.http.delete<Education>(`${this.url}/deleteEducation/${edu.id}`)
  }

  newEducation(edu:Education): Observable<Education>{
    return this.http.post<Education>(`${this.url}/newEducation`, edu, httpOptions)
  }

  editEducation(edu:Education): Observable<Education>{
    return this.http.put<Education>(`${this.url}/editEducation/${edu.id}`, edu, httpOptions)
  }
}
