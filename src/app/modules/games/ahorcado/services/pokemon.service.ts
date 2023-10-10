import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) { }

  getAllPokemonNames(): Observable<any> {
    const url = `${this.url}/pokemon?limit=151`; // You can adjust the limit as needed
    return this.http.get(url);
  }

  getPokemonDetails(pokemonName: string): Observable<any> {
    const url = `${this.url}/pokemon/${pokemonName}`;
    return this.http.get(url);
  }

}
