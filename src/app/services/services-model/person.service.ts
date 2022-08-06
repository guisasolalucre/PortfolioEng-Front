import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/Person';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = "https://lucrecia-guisasola-portfolioen.herokuapp.com";

  constructor(private http: HttpClient) { }

  getData(): Observable<Person> {
    return this.http.get<Person>(`${this.url}/data`);
  }

  editPerson(per:Person): Observable<Person>{
    return this.http.put<Person>(`${this.url}/editPerson/${per.id}`, per, httpOptions)
  }

}
