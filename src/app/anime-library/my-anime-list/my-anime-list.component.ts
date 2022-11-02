import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IAnime } from 'src/app/shared/models/anime';
import { IUserAnime } from 'src/app/shared/models/user-anime';
import { BreadcrumbService } from 'xng-breadcrumb';
import { AnimeLibraryService } from './../anime-library.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-my-anime-list',
  templateUrl: './my-anime-list.component.html',
  styleUrls: ['./my-anime-list.component.scss']
})
export class MyAnimeListComponent implements OnInit {

  useranimes: IUserAnime[];

  currentUser: IUser;

  constructor( private AnimeLibraryService: AnimeLibraryService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.accountService.getCurrentUserValue();
    this.getAnimeByUserId();
  }

  getAnimeByUserId(){
    this.AnimeLibraryService.getAnimeByUserId(this.currentUser.id).subscribe(response =>{
      this.useranimes = response;
      this.useranimes.map(useranime => useranime.anime)
    }, error =>{
      console.log(error);
    })
  }


}
