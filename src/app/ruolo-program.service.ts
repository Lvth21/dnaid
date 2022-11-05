import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RuoloProgram } from './ruolo-program';

@Injectable({
  providedIn: 'root'
})
export class RuoloProgramService {

  private baseUrl = "http://localhost:8090";

  constructor(private http: HttpClient) { }

  showPrograms(): Observable<RuoloProgram[]> {
    return this.http.get<RuoloProgram[]> (`${this.baseUrl + "/ruolo/get"}`);
  }

  saveRuoloPrograms(program: RuoloProgram):Observable<RuoloProgram>{
    console.log(program);
    return this.http.post<RuoloProgram> (`${this.baseUrl + "/ruolo/save"}`, program);
  }

}
