import { Component } from '@angular/core';
import { Character } from '../../interfaces/icaracters';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-caracters-list',
  templateUrl: './caracters-list.component.html',
  styleUrl: './caracters-list.component.scss'
})
export class CaractersListComponent {

  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  loading: boolean = true;
  displayDialog: boolean = false;
  selectedCharacter: any = null;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
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

  search(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(query) || 
      (character.description && character.description.toLowerCase().includes(query))
    );
  }

  viewDetails(character: Character) {
    this.selectedCharacter = character;
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }
}
