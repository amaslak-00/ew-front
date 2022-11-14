import { AnimeLibraryRoutingModule } from './anime-library-routing.module';
import { ShareModule } from './../shared/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeLibraryComponent } from './anime-library.component';
import { AnimeItemComponent } from './anime-item/anime-item.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { MyAnimeListComponent } from './my-anime-list/my-anime-list.component';
import { MyAnimeComponent } from './my-anime/my-anime.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnimeLibraryComponent,
    AnimeItemComponent,
    AnimeDetailsComponent,
    MyAnimeListComponent,
    MyAnimeComponent,
 
  ],
  imports: [
    CommonModule,
    ShareModule,
    AnimeLibraryRoutingModule,
    FormsModule,
    
  ],
  exports: []
})
export class AnimeLibraryModule { }
