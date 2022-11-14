import { IUser } from 'src/app/shared/models/user';
import { IUserAnimeDTO } from './../shared/models/user-anime-dto';
import { IUserAnime } from './../shared/models/user-anime';
import { AnimeLibraryParams } from './../shared/models/anime-library-params';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IAnime } from '../shared/models/anime';
import {map} from 'rxjs/operators';
import { AccountService } from '../account/account.service';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AnimeLibraryService {


  baseUrl = 'http://localhost:8080/api/';
 

  constructor(private http: HttpClient, private accountService: AccountService, private router: Router) { }

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

  getAnimeByUserId(id: number){
    return this.http.get<any>(this.baseUrl + 'useranime/' + id)
  }

  getUserAnimeByIds(userId: number, animeId: number){
   return this.http.get<IUserAnime>(this.baseUrl + 'useranime/' + userId + '/' +  animeId)
    .pipe(map(responseData =>{
      const currentAnimeUser : IUserAnime = responseData;
      console.log(responseData)
      return currentAnimeUser;
    })
    )
  }

  addComment(userId: number, animeId: number, comment: string){
    return this.http.post<any>(this.baseUrl + 'useranime/' + userId + '/' +  animeId, comment).subscribe(responseData =>
      console.log(responseData));
  }

  addAnime(values: IUserAnimeDTO){
    console.log(values);
    return this.http.post<any>(this.baseUrl + 'useranime', values);
  }

}
