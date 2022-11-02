import { AnimeLibraryParams } from './../shared/models/anime-library-params';
import { IStudio } from './../shared/models/studio';
import { AnimeLibraryService } from './anime-library.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAnime } from '../shared/models/anime';
import { AccountService } from 'src/app/account/account.service';
import { Observable } from 'rxjs';
import { IUserAnime } from '../shared/models/user-anime';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-anime-library',
  templateUrl: './anime-library.component.html',
  styleUrls: ['./anime-library.component.scss']
})
export class AnimeLibraryComponent implements OnInit {
  
  @ViewChild('search', {static: true}) searchTerm: ElementRef;

  animes: IAnime[];
  allanimes: IAnime[];
  studios: IStudio[];
  genres: IAnime[];
  ongoings: IAnime[];
  allgenres: IAnime[];

  numberOfAllItems: number;
  studioIdSelected= 0;
  genreNameSelected = '';
  AnimeLibraryParams = new AnimeLibraryParams();
  sortSelected = 'name';
  sortOptions = [
    {name: 'ongoing',value: 'ongoing' },
    {name: 'not ongoing', value: 'notongoing'}
  ]
  currentUser$ : Observable<any>;
  

  constructor(private AnimeLibraryService: AnimeLibraryService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    this.getAnimes();
    this.getStudios();
    this.getGenres();
    this.getNumberOfAllItems();
   
  
  }

  getNumberOfAllItems(){
    this.AnimeLibraryService.getAnimeList().subscribe(response =>{
      this.animes = response;
      this.numberOfAllItems = this.animes.length;

    }, error => {
      console.log(error);
    });
  }

  
  getAnimes(){
    this.AnimeLibraryService.getAnimeList().subscribe(response =>{
      this.animes = response;
      this.allanimes = response;
    }, error => {
      console.log(error);
    });
  }

  getStudios(){
    this.AnimeLibraryService.getStudios().subscribe(response =>{
      this.studios = [{id: 0, name: 'All'}, ...response]
    }, error =>{
      console.log(error);
    });
  }

  getGenres(){
    this.AnimeLibraryService.getGenres().subscribe(response =>{
      this.genres =response;
    }, error =>{
      console.log(error);
    });
  }

  getOnGoing(){
    this.AnimeLibraryService.getOnGoing().subscribe(response =>{
      this.genres =response;
    }, error =>{
      console.log(error);
    });
  }

 
  onIsOnGoingSelected(status: boolean){
    if(status == true){
      this.animes = this.allanimes.filter(anime => anime.isOngoing === true);
    }
    else{
      this.animes = this.allanimes.filter(anime => anime.isOngoing === false);
    }
  
  }


  onStudioSelected(studioId: number){
    this.studioIdSelected = studioId;

    if(this.studioIdSelected === 0){
      if(this.genreNameSelected === ''){
        this.animes = this.allanimes;
      }
      else{
        this.animes = this.allanimes.filter(anime => anime.genre === this.genreNameSelected);
      }  
    }
    else
      if(this.genreNameSelected === ''){
        this.animes = this.allanimes.filter(anime => anime.studio.id === this.studioIdSelected);
      }
      else{
        this.animes = this.allanimes.filter(anime => anime.studio.id === this.studioIdSelected && anime.genre === this.genreNameSelected);
      }
    
  }

  onGenreSelected(genreName: string){
    this.genreNameSelected = genreName;
   
    if(this.genreNameSelected === ''){
      this.animes = this.allanimes.filter(anime => anime.studio.id === this.studioIdSelected);
    }
    else
      if(this.studioIdSelected === 0){
        this.animes = this.allanimes.filter(anime => anime.genre === this.genreNameSelected);
      }
      else{
        this.animes = this.allanimes.filter(anime => anime.studio.id === this.studioIdSelected && anime.genre === this.genreNameSelected);
      }
    
    
  }




  onAll(){
    this.getAnimes();
  }

  onSortSelected(sort: string){
    this.sortSelected = sort;
    if(sort === 'ongoing'){
      this.animes = this.allanimes.filter(anime => anime.isOngoing === true)
    }
    else{
      this.animes = this.allanimes.filter(anime => anime.isOngoing === false);
    }
    console.log(this.sortSelected);

  }
  
  onSearch(){
    this.AnimeLibraryParams.search = this.searchTerm.nativeElement.value;
    this.animes = this.allanimes.filter(anime => anime.title.includes(this.AnimeLibraryParams.search));
  }

  onReset(){
    this.searchTerm.nativeElement.value = undefined;
    this.getAnimes();
  }


}
