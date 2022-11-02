import { AnimeLibraryService } from './../../anime-library/anime-library.service';
import { AccountService } from './../../account/account.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentUser$: Observable<any>;

  constructor(private accountService: AccountService, private activateRoute: ActivatedRoute, private animeService: AnimeLibraryService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout(){
    this.accountService.logout();
  }

}
