import { AnimeLibraryParams } from './../shared/models/anime-library-params';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnime } from '../shared/models/anime';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimeLibraryService {

  baseUrl = 'http://localhost:8080/api/';
 

  constructor(private http: HttpClient) { }

  getAnimeList(){
    return this.http.get<any>(this.baseUrl + 'anime')
  }

  getAnimeById(id: number){
    return this.http.get<any>(this.baseUrl + 'anime/' + id);
  }

  getStudios(){
    return this.http.get<any>(this.baseUrl + 'studio');
  }

  getGenres(){
    return this.http.get<any>(this.baseUrl + 'anime/genre')
  }

  getOnGoing(){
    return this.http.get<any>(this.baseUrl + 'anime/ongoing')
  }
}
