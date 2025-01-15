import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaractersListComponent } from './components/caracters-list/caracters-list.component';

const routes: Routes = [

  {
    path: '',
    component: CaractersListComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
