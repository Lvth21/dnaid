import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RuoloProgram } from 'src/app/classes/ruolo-program';
import { RuoloProgramService } from 'src/app/services/ruolo-program.service';
import { htmlToText } from 'html-to-text';

@Component({
  selector: 'app-updateprograms',
  templateUrl: './updateprograms.component.html',
  styleUrls: ['./updateprograms.component.css']
})
export class UpdateprogramsComponent implements OnInit {
  
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private ruoloPservice: RuoloProgramService,
              private fb: FormBuilder) {


                this.form = this.fb.group({
                  name: ['', [Validators.required]],
                  descrizione: [''],
                  file: [''],
                  fileSource: [null]
                });

               }

  public items!: RuoloProgram[];
  programs!: RuoloProgram[];
  selectedProgram=0;
  shownprogram?:RuoloProgram;
  descr!: string;
  
  form!: FormGroup;

htmlfile = "Ciao<br>prova"

  ruolo = {
    idRuolo: 0,
    descrizione: "",
    nome: ""
  }

  


   //default value for truolo-program
   get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.loadPrograms();
  }

  selectionChanged(event: Event){
console.log(this.selectedProgram);
this.shownprogram =  this.programs.find(x => x.idRuolo == this.selectedProgram);
this.descr = this.convertHtmlToText(this.shownprogram!.descrizione);
    this.form  = new FormGroup({
      idRuolo: new FormControl(this.shownprogram?.idRuolo),
      descrizione: new FormControl(this.descr),
      name: new FormControl(this.shownprogram?.nome),
      file: new FormControl,
      fileSource: new FormControl
      
    });
  }

  loadPrograms() {
    this.ruoloPservice.showPrograms().subscribe((data: RuoloProgram[]) => {
      this.programs = data;
    })
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



    onSubmit() {
      this.ruolo.nome = this.form.get('name')!.value;
      
      this.ruolo.descrizione = this.form.get('descrizione')!.value;
      this.ruolo.idRuolo = this.shownprogram!.idRuolo;
  
console.log("id=" + this.ruolo.idRuolo + " desc=" + this.ruolo.descrizione + " nome=" + this.ruolo.nome )

      const formData = new FormData();
      const json = JSON.stringify(this.ruolo);
      const blob = new Blob([json], {
        type: 'application/json'
      });
  
  
  
      formData.append('file', this.form.get('fileSource')!.value);
      formData.append('ruolo', blob);
  
  
      console.log('onsubmit');
      this.ruoloPservice.updateRuoloPlusImage(formData)
        .subscribe(res => {
  console.log(res);
          alert('Uploaded Successfully.');
        })
    }

    convertHtmlToText(htmltext : string)
    {
      return htmlToText(htmltext, {
        singleNewLineParagraphs: true,
        ignoreImage: true,
        formatters: {
          anchor: (el, walk, builder, opts) => {
            builder.openBlock();
            walk(el.children, builder);
            builder.closeBlock();
          },
        },
      });
    }
}
