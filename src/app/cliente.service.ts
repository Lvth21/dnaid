import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  
  private baseUrl = "http://localhost:8090";
  

  constructor(private http: HttpClient) { }

  filtraCliente(object: any ): Observable<Cliente[]>{
    return this.http.post<Cliente[]>(`${this.baseUrl + "/dipendente/filtra"}`, object);
  }
  totClienti(): Observable<number>{
    return this.http.get<number> (`${this.baseUrl + "/dipendente/total"}`);
  }


}
