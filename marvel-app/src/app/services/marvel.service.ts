import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import md5 from 'md5';
import { HttpClient } from '@angular/common/http';
import { MarvelApiResponse } from '../interfaces/icaracters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private apiUrl = environment.marvelApiUrl;
  private publicKey = environment.marvelPublicKey;
  private privateKey = environment.marvelPrivateKey;

  characters = signal<any[]>([]);

  constructor(private http: HttpClient) { }

  private getAuthParams() {
    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${this.privateKey}${this.publicKey}`);
    return `ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
  }

  fetchCharacters(offset = 0, limit = 20) {
    const url = `${this.apiUrl}/characters?offset=${offset}&limit=${limit}&${this.getAuthParams()}`;
    this.http.get(url).subscribe((response: any) => {
      this.characters.set(response.data.results);
    });
  }

  getCharacters(): Observable<MarvelApiResponse> {
    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${this.privateKey}${this.publicKey}`);
    const authParams = `ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;

    return this.http.get<MarvelApiResponse>(`${this.apiUrl}/characters?${authParams}`);
  }
  
}