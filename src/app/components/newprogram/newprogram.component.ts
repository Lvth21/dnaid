import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RuoloProgram } from 'src/app/classes/ruolo-program';
import { RuoloProgramService } from 'src/app/services/ruolo-program.service';

@Component({
  selector: 'app-newprogram',
  templateUrl: './newprogram.component.html',
  styleUrls: ['./newprogram.component.css']
})
export class NewprogramComponent implements OnInit {

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  // form group
  form!: FormGroup;

  ruolo = {
    idRuolo: 0,
    descrizione: "",
    nome: ""
  }

  constructor(private ruoloService: RuoloProgramService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      descrizione: [''],
      file: [''],
      fileSource: [null],
    });

  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }

  // on file select event
  onFileChange(event: any) {
    
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      
      if(!(file.type.match(/image.*/))){
        alert('You can\'t upload this type of file.');
        return;
      }else{
        console.log("here");
      this.form.patchValue({
        fileSource: file
        
      });}
    }
  }

  // on form submit function
  onSubmit() {
    this.ruolo.nome = this.form.get('name')!.value;
    
    this.ruolo.descrizione = this.form.get('descrizione')!.value;


    const formData = new FormData();
    const json = JSON.stringify(this.ruolo);
    const blob = new Blob([json], {
      type: 'application/json'
    });



    formData.append('file', this.form.get('fileSource')!.value);
    formData.append('ruolo', blob);


    console.log('onsubmit');
    this.ruoloService.saveRuoloPlusImage(formData)
      .subscribe(res => {

        alert('Uploaded Successfully.');
      })
  }

  savePrograms(program: RuoloProgram) {
    this.ruoloService.saveRuoloPrograms(program).subscribe((data: RuoloProgram) => {
      this.ruolo = data;
      console.log(data);
      alert("Program Saved");
    })

  }
}
