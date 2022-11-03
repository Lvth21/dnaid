import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tstato } from './tstato';
@Injectable({
  providedIn: 'root'
})
export class TstatoService {
  private baseUrl = "http://localhost:8090";
  constructor(private http: HttpClient) {


   }


   
   showTstati(): Observable<Tstato[]> {
    return this.http.get<Tstato[]> (`${this.baseUrl + "/stato/get"}`);
  }
}
