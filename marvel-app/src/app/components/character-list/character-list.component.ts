import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Character } from '../../interfaces/icaracters';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule, TableModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {

  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  loading: boolean = true;

  constructor(public marvelService: MarvelService) {}

  ngOnInit() {
    this.getAll();
  }

 getAll(){
  this.marvelService.getCharacters().subscribe({
    next: (response) => {
      this.characters = response.data.results;
      this.filteredCharacters = [...this.characters];
      this.loading = false;
    },
    error: (error) => {
      console.error('Erro ao buscar personagens:', error);
      this.loading = false;
    },
  });
 }

  search($event: any) {
    const lowerQuery = $event.toLowerCase();
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(lowerQuery)
    );
  }

  viewDetails(character: any) {
  
  }
}
