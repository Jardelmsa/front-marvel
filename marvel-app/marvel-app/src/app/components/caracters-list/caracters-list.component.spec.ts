import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaractersListComponent } from './caracters-list.component';
import { MarvelService } from '../../services/marvel.service';
import { of, throwError } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CharacterDetailsDialogComponent } from '../../character-details-dialog/character-details-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Character } from '../../interfaces/icaracters';

fdescribe('CaractersListComponent', () => {
  let component: CaractersListComponent;
  let fixture: ComponentFixture<CaractersListComponent>;
  let marvelServiceSpy: jasmine.SpyObj<MarvelService>;

  beforeEach(async () => {
    const marvelServiceMock = jasmine.createSpyObj('MarvelService', ['getCharacters']);
    const mockResponse = {
      data: {
        results: [
          { name: 'Spider-Man', description: 'Hero', thumbnail: { path: 'path1', extension: 'jpg' } },
          { name: 'Iron Man', description: 'Genius', thumbnail: { path: 'path2', extension: 'jpg' } },
        ],
      },
    };

    marvelServiceMock.getCharacters.and.returnValue(of(mockResponse));
    

    await TestBed.configureTestingModule({
      declarations: [CaractersListComponent, CharacterDetailsDialogComponent],
      imports:[
        TableModule,
        DialogModule,
        ButtonModule,
        BrowserAnimationsModule, 
      ],
      providers: [
        { provide: MarvelService, useValue: marvelServiceMock },
      ],
    }).compileComponents();

    marvelServiceSpy = TestBed.inject(MarvelService) as jasmine.SpyObj<MarvelService>;
  });

  beforeEach(async () => {
   
    fixture = TestBed.createComponent(CaractersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar chamar o serviço', () => {
   
    component.fetchCharacters();
    expect(marvelServiceSpy.getCharacters).toHaveBeenCalled();
    expect(component.loading).toBeFalse(); 
  });

  it('deve filtrar os personagens com base na busca', () => {

    component.characters = [
      {
        id: 1,
        name: 'Spider-Man',
        description: 'Hero',
        modified: new Date(),
        resourceURI: 'uri1',
        urls: [],
        thumbnail: { path: 'path1', extension: 'jpg' },
        comics: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
        stories: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
        events: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
        series: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
      },
      {
        id: 2,
        name: 'Iron Man',
        description: 'Genius',
        modified: new Date(),
        resourceURI: 'uri2',
        urls: [],
        thumbnail: { path: 'path2', extension: 'jpg' },
        comics: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
        stories: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
        events: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
        series: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
      },
    ];
    component.filteredCharacters = [...component.characters];

    const event = { target: { value: 'spider' } } as unknown as Event;

    component.search(event);

    expect(component.filteredCharacters.length).toBe(1);
    expect(component.filteredCharacters[0].name).toBe('Spider-Man');

    const event2 = { target: { value: 'genius' } }  as unknown as Event;
    component.search(event2);

    expect(component.filteredCharacters.length).toBe(1);
    expect(component.filteredCharacters[0].name).toBe('Iron Man');
  });

  it('should select character and show dialog when viewDetails is called', () => {
    const character: Character = {
      id: 1,
      name: 'Spider-Man',
      description: 'Hero',
      modified: new Date(),
      resourceURI: 'uri1',
      urls: [],
      thumbnail: { path: 'path1', extension: 'jpg' },
      comics: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
      stories: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
      events: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
      series: { available: 1, collectionURI: 'uri', items: [], returned: 1 },
    };

    component.viewDetails(character);
    expect(component.selectedCharacter).toEqual(character);
    expect(component.displayDialog).toBeTrue();
  });
});
