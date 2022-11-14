import { IUserAnimeDTO } from './../../shared/models/user-anime-dto';
import { IUserAnime } from 'src/app/shared/models/user-anime';
import { AnimeLibraryService } from './../anime-library.service';
import { Component, OnInit } from '@angular/core';
import { IAnime } from 'src/app/shared/models/anime';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Observable, map } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IUser } from 'src/app/shared/models/user';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  anime: IAnime;
  viewComment:boolean=false;
  currentAnime: IAnime;
  currentUser$: Observable<any>;
  currentUser: IUser;
  errors: string[];
  currentUserAnime : IUserAnime;
  currentUserAnime2 : IUserAnime;
  currentComment : String;
  userAnimeDTO : IUserAnimeDTO;
  isFetched : boolean;
  isCommented : boolean;
  dataSubmited : boolean;
  userAnimeId: number = 0;
  constructor(private AnimeLibraryService: AnimeLibraryService, private fb: FormBuilder, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAnime();
    this.currentUser = this.accountService.getCurrentUserValue();
    this.currentUser$ = this.accountService.currentUser$;
    this.isFetched = false;
    this.isCommented = false;
    this.dataSubmited = false;
  }

  loadAnime(){
    this.AnimeLibraryService.getAnimeById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(anime => {
      this.anime = anime;
      this.bcService.set('@AnimeDetails', anime.title)
      this.currentAnime = anime;
    }, error=>{
      console.log(error);
    })
  }

  viewCommentFunction(){
    this.viewComment=true;
  }
  createUserAnime() : IUserAnimeDTO{
    return {
      isWatched: true,
      userId: this.currentUser.id,
      animeId: this.currentAnime.id,
      comment: "comment"
    };
  }
  
  getUserAnime(){
    this.AnimeLibraryService.getUserAnimeByIds(this.currentUser.id, this.currentAnime.id).subscribe(animeuser =>{
      this.currentUserAnime = animeuser;
      console.log(this.currentUserAnime)
      this.isFetched = true;
    }, error=>{
      console.log(error);
      this.errors = error.errors;
    })
  }

  getComment(){
    this.AnimeLibraryService.getUserAnimeByIds(this.currentUser.id, this.currentAnime.id).subscribe(animeuser =>{
      this.currentUserAnime2 = animeuser;
      console.log(this.currentUserAnime)
      this.isCommented = true;
    }, error=>{
      console.log(error);
      this.errors = error.errors;
    })
  }



  addAnimeToUser(){
    this.AnimeLibraryService.addAnime(this.createUserAnime()).subscribe(() =>{
      console.log("finish")
    }, error=>{
      console.log(error)
    });
   
  }

  onComment(postData: {comment: string}){
    this.AnimeLibraryService.addComment(this.currentUser.id, this.currentAnime.id, postData.comment);
    this.dataSubmited = true;
  }



  

}
