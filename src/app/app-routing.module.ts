import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { DnadbComponent } from './dnadb/dnadb.component';
import { HomeComponent } from './home/home.component';
import { NewprogramComponent } from './newprogram/newprogram.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dna-database', component: DnadbComponent  },
  { path: 'book-service', component: BookingpageComponent  },
  { path: 'programs', component: ProgramsComponent  },
  { path: 'newprogram', component: NewprogramComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }