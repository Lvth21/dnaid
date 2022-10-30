import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Cliente } from '../cliente';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dnadb',
  templateUrl: './dnadb.component.html',
  styleUrls: ['./dnadb.component.css']
})
export class DnadbComponent implements OnInit {

  numClienti!: number;
  clienti!: Cliente[];
 
  //sortByselected: FormControl = new FormControl();
 
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
  sortBy=[{id: "nome", title: "Name"},
  {id: "cognome", title: "Surname"},  {id: "dataAssunzione", title: "Last DNA test date"},  {id: "dataDiNascita", title: "Place of Birth"},  {id: "luogoDiNascita", title: "Date of Birth"},
  {id: "tstato", title: "Police Shared"},  {id: "truolo", title: "Program"},  {id: "cartaIdentita", title: "ID"},  {id: "codiceFiscale", title: "Health ID"},];
  //sortByselected= {id: "nome", title: "Name"};
  sortByselected= this.sortBy[0];
  form: FormGroup = new FormGroup({});
  

  constructor(private clienteService: ClienteService, private http: HttpClient, private fb: FormBuilder) {
    this.form = fb.group({
      n: [this.sortByselected, [Validators.required]]
    });

    
     }

  ngOnInit() {
    this.loadNumClienti();
    
  }

  loadNumClienti(){
    this.clienteService.totClienti().subscribe((data: number) => {
      console.log(data);
      this.numClienti = data;
    })
  } 
    
  filtra(filtro: {sortBy:string, sortType:string, pageNumber: number, resultsForPage: number
    dataAssunzioneStart: Date, dataAssunzioneEnd: Date, nome: string, congome: string, truolo: number  }){
      this.clienteService.filtraCliente(filtro).subscribe((data: Cliente[]) => {
        this.clienti = data;
      });
  }
}

