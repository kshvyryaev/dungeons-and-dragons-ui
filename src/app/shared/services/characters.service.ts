import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from './endpoints';
import { Character } from '../entities/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private charactersUrl: string;

  constructor(private httpClient: HttpClient) {
    this.charactersUrl = `${environment.apiUrl}/${endpoints.characters}`;
  }

  public add(character: Character): Observable<HttpResponse<Object>> {
    return this.httpClient.post(this.charactersUrl, character, { observe: 'response' });
  }

  public getAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.charactersUrl);
  }

  public getById(id: string): Observable<Character> {
    return this.httpClient.get<Character>(`${this.charactersUrl}/${id}`);
  }

  public edit(character: Character): Observable<HttpResponse<Object>> {
    return this.httpClient.put(`${this.charactersUrl}`, character, { observe: 'response' });
  }

  public removeById(id: string): Observable<HttpResponse<Object>> {
    return this.httpClient.delete(`${this.charactersUrl}/${id}`, { observe: 'response' });
  }

}
