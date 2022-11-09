import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { BookingpageComponent } from './components/bookingpage/bookingpage.component';
import { DnadbComponent } from './components/dnadb/dnadb.component';
import { HomeComponent } from './components/home/home.component';
import { NewprogramComponent } from './components/newprogram/newprogram.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ClienteService } from './services/cliente.service';
import { RuoloProgramService } from './services/ruolo-program.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DnadbComponent,
    BookingpageComponent,
    ProgramsComponent,
    NewprogramComponent,
    FileUploadComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule, //<--include
    CdkAccordionModule
  ],
  providers: [ClienteService, RuoloProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
