import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import md5 from 'md5';
import { MarvelApiResponse } from '../interfaces/icaracters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private apiUrl = environment.marvelApiUrl;
  private apiKey = environment.marvelPublicKey;
  private apiPrivateKey = environment.marvelPrivateKey;
  private ts ='1';

  characters = signal<any[]>([]);

  constructor(private http: HttpClient) { }

  private generateHash(): string {
    const privateKey = this.apiPrivateKey;
    const publicKey = this.apiKey;
    const ts = this.ts;

    const hash = md5(ts + privateKey + publicKey);
    return hash;
  }

  getCharacters():Observable<MarvelApiResponse> {
    const hash = this.generateHash();

    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('ts', this.ts)
      .set('hash', hash);
   

    return this.http.get<MarvelApiResponse>(`${this.apiUrl}/characters?${params}`);
  }

  


}



