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
 

 
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
  form: FormGroup = new FormGroup({});
  //sortType select options
  sortTypes=[{id: "ASC", title: "Ascending order" }, {id: "DESC", title: "Descending order" }];
  sortTypeselected= this.sortTypes[0];
  //sortby select options
  sortBys=[{id: "nome", title: "Name"}, {id: "cognome", title: "Surname"},  {id: "dataAssunzione", title: "Last DNA test date"}, 
   {id: "dataDiNascita", title: "Place of Birth"},  {id: "luogoDiNascita", title: "Date of Birth"}, {id: "tstato", title: "Police Shared"}, 
    {id: "truolo", title: "Program"},  {id: "cartaIdentita", title: "ID"},  {id: "codiceFiscale", title: "Health ID"},];
  sortByselected= this.sortBys[0];
  
  pageNumber: number = 1;
  

  constructor(private clienteService: ClienteService, private http: HttpClient, private fb: FormBuilder) {
    //default value for sortby
    this.form = fb.group({
      by: [this.sortByselected, [Validators.required]]
    });

    //default value for type
    this.form = fb.group({
      type: [this.sortTypeselected, [Validators.required]]
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

