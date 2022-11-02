import { MyAnimeComponent } from './my-anime/my-anime.component';
import { MyAnimeListComponent } from './my-anime-list/my-anime-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeLibraryComponent } from './anime-library.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';


const routes: Routes = [
  {path: '', component: AnimeLibraryComponent},
  {path: 'my-anime-list', component: MyAnimeListComponent, data: {breadcrumb: 'My Anime List'} ,pathMatch: 'full'},
  {path: ':id', component: AnimeDetailsComponent, data: {breadcrumb: {alias: 'AnimeDetails'}} ,pathMatch: 'full'},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AnimeLibraryRoutingModule { }
