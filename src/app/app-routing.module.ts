import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DnadbComponent } from './dnadb/dnadb.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dna-database', component: DnadbComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }