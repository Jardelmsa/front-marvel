import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: 'characters',
        component: CharacterListComponent
      },
      {
        path: '**',
        redirectTo: 'characters'
      }
];
