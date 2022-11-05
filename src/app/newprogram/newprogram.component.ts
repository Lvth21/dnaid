import { Component, OnInit } from '@angular/core';
import { RuoloProgram } from '../ruolo-program';
import { RuoloProgramService } from '../ruolo-program.service';

@Component({
  selector: 'app-newprogram',
  templateUrl: './newprogram.component.html',
  styleUrls: ['./newprogram.component.css']
})
export class NewprogramComponent implements OnInit {

ruolo!:RuoloProgram;

  constructor(private ruoloService: RuoloProgramService) { }

  ngOnInit(): void {
  }


  savePrograms(program: RuoloProgram){
    this.ruoloService.saveRuoloPrograms(program).subscribe((data: RuoloProgram) => {
      this.ruolo = data;
      console.log(data);
      alert("Program Saved");
    })
    
  }
}
