import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/classes/cliente';
import { RuoloProgram } from 'src/app/classes/ruolo-program';
import { Tstato } from 'src/app/classes/tstato';
import { ClienteService } from 'src/app/services/cliente.service';
import { RuoloProgramService } from 'src/app/services/ruolo-program.service';
import { TstatoService } from 'src/app/services/tstato.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit {

  programs!: RuoloProgram[];
  selectedProgram=null;

  stats!: Tstato[];
  selectedTstato=null;

  constructor(private ruoloPservice: RuoloProgramService,
              private statoService: TstatoService,
              private clientiService: ClienteService) {  }

  ngOnInit(): void {
    this.loadPrograms();
    this.loadTstato();
  }

  loadPrograms(){
    this.ruoloPservice.showPrograms("active").subscribe((data: RuoloProgram[]) => {
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
