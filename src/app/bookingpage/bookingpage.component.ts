import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { RuoloProgram } from '../ruolo-program';
import { RuoloProgramService } from '../ruolo-program.service';
import { Tstato } from '../tstato';
import { TstatoService } from '../tstato.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit {

  programs!: RuoloProgram[];
  selectedProgram=0;

  stats!: Tstato[];
  selectedTstato=0;

  constructor(private ruoloPservice: RuoloProgramService,
              private statoService: TstatoService,
              private clientiService: ClienteService) {  }

  ngOnInit(): void {
    this.loadPrograms();
    this.loadTstato();
  }

  loadPrograms(){
    this.ruoloPservice.showPrograms().subscribe((data: RuoloProgram[]) => {
      this.programs = data;
    })
  }
  loadTstato(){
    this.statoService.showTstati().subscribe((data: Tstato[]) => {
      this.stats = data;
    })
  }

  saveBooking(filledform: Cliente){
    console.log(filledform);
    this.clientiService.saveCliente(filledform).subscribe();
    alert("Request went through");
    
  }

}
