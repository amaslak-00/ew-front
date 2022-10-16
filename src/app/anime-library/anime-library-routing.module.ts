import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeLibraryComponent } from './anime-library.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';


const routes: Routes = [
  {path: '', component: AnimeLibraryComponent},
  {path: ':id', component: AnimeDetailsComponent, data: {breadcrumb: {alias: 'AnimeDetails'}}},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AnimeLibraryRoutingModule { }
