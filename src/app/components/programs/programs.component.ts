import { Component, OnInit } from '@angular/core';
import { RuoloProgram } from 'src/app/classes/ruolo-program';
import { RuoloProgramService } from 'src/app/services/ruolo-program.service';

@Component({
  selector: 'cdk-accordion-overview-example',
  templateUrl: 'programs.component.html',
  styleUrls: ['programs.component.css'],
})
export class ProgramsComponent implements OnInit {

  public items!: RuoloProgram[];
 

  constructor(private ruoloPservice: RuoloProgramService) { }

  ngOnInit(): void {
    this.loadPrograms();

  }

  loadPrograms(){
    this.ruoloPservice.showPrograms().subscribe((data: RuoloProgram[]) => {
      console.log(data);
      this.items = data;
    })
  }
  


}
