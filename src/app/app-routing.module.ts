import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpageComponent } from './components/bookingpage/bookingpage.component';
import { DnadbComponent } from './components/dnadb/dnadb.component';
import { HomeComponent } from './components/home/home.component';
import { NewprogramComponent } from './components/newprogram/newprogram.component';
import { ProgramsComponent } from './components/programs/programs.component';

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