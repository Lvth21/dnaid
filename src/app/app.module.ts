import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { DnadbComponent } from './dnadb/dnadb.component';
import { ClienteService } from './cliente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { RuoloProgramService } from './ruolo-program.service';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { ProgramsComponent } from './programs/programs.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DnadbComponent,
    BookingpageComponent,
    ProgramsComponent
  ],
  imports: [
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
