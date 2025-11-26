import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { environments } from '../../../../eviroments.prod/eviroments.prod';
import { SimpsonsCharacterDetail } from '../interfaces/SimpsonsCharacterDetail';
import { SimpsonsResponse } from '../interfaces/SimpsonsResponse';
import { Options } from '../interfaces/options';
import {map, delay } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  private http = inject(HttpClient);
  private readonly API_URL = environments.apiUrl;

  getCharacters(page: number = 1): Observable<SimpsonsResponse> {
    return this.http.get<SimpsonsResponse>(`${this.API_URL}/characters?page=${page}`).pipe(
      map(res => res),
      catchError(err => {
        console.error('Error al obtener personajes', err);
        return of({ count: 0, next: null, prev: null, pages: 0, results: [] });
      })
    );
  }

  getCharacterById(id: number): Observable<SimpsonsCharacterDetail | null> {
    return this.http.get<SimpsonsCharacterDetail>(`${this.API_URL}/characters/${id}`).pipe(
      catchError(err => {
        console.error('Personaje no encontrado', err);
        return of(null);
      })
    );
  }

  getCharactersOptions(options: Options): Observable<SimpsonsResponse> {
    return this.http.get<SimpsonsResponse>(`${this.API_URL}/characters?page=${options.offset}`).pipe(
      delay(3500),
      map(res => res),
      catchError(err => {
        console.error('Error al obtener personajes', err);
        return of({ count: 0, next: null, prev: null, pages: 0, results: [] });
      })
    );
  }
}