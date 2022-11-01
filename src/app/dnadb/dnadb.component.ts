import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Cliente } from '../cliente';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RuoloProgram } from '../ruolo-program';
import { RuoloProgramService } from '../ruolo-program.service';

@Component({
  selector: 'app-dnadb',
  templateUrl: './dnadb.component.html',
  styleUrls: ['./dnadb.component.css'],
  template: `
  <ul>
    <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
  </ul>
             
  <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `
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
  sortTypeselected= this.sortTypes[0].id;
  //sortby select options
  sortBys=[{id: "nome", title: "Name"}, {id: "cognome", title: "Surname"},  {id: "dataAssunzione", title: "Last DNA test date"}, 
   {id: "dataDiNascita", title: "Place of Birth"},  {id: "luogoDiNascita", title: "Date of Birth"}, {id: "tstato", title: "Police Shared"}, 
    {id: "truolo", title: "Program"},  {id: "cartaIdentita", title: "ID"},  {id: "codiceFiscale", title: "Health ID"},];
  sortByselected= this.sortBys[0].id;
  p: number = 1;
  collection: any[] = [1,2,3,4];


  pageNumberDefault: number = 1;
  resultsNumberDefault: number = 10;
  allPages!: number[]; 
  
  pages = this.resultsNumberDefault;
  
  programs!: RuoloProgram[];
  selectedProgram!:RuoloProgram;

  constructor(
    private clienteService: ClienteService, 
    private http: HttpClient, 
    private fb: FormBuilder,
    private ruoloPservice: RuoloProgramService) {

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
    this.loadPrograms();
  }

  loadNumClienti(){
    this.clienteService.totClienti().subscribe((data: number) => {
      this.numClienti = data;
    })
  } 
    
  filtra(filtro: {sortBy:string, sortType:string, //pageNumber: number, resultsForPage: number
    dataAssunzioneStart: Date, dataAssunzioneEnd: Date, nome: string, congome: string, truolo: number  }){
      console.log(filtro);
      this.clienteService.filtraCliente(filtro).subscribe((data: Cliente[]) => {
        console.log(data);
        this.clienti = data;
      });
  }

  loadPrograms(){
    this.ruoloPservice.showPrograms().subscribe((data: RuoloProgram[]) => {
      this.programs = data;
    })
  }



}

