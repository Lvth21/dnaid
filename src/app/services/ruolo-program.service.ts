import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RuoloProgram } from '../classes/ruolo-program';

@Injectable({
  providedIn: 'root'
})
export class RuoloProgramService {

  private baseUrl = "http://localhost:8090";

  constructor(private http: HttpClient) { }

  showPrograms(active: string): Observable<RuoloProgram[]> {
    return this.http.get<RuoloProgram[]> (`${this.baseUrl + "/ruolo/get-" + active}`);
  }

  saveRuoloPrograms(program: RuoloProgram):Observable<RuoloProgram>{
    return this.http.post<RuoloProgram> (`${this.baseUrl + "/ruolo/save"}`, program);
  }

  saveRuoloPlusImage(formData : FormData){
    return this.http.post(`${this.baseUrl + "/ruolo/save"}`, formData)
  }
  updateRuoloPlusImage(formData : FormData){
    return this.http.put(`${this.baseUrl + "/ruolo/update"}`, formData)
  }

  deleteRuolo(id: number){
    return this.http.delete(`${this.baseUrl + "/ruolo/activation/" + id}`)
  }

}
