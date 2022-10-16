import { AnimeLibraryRoutingModule } from './anime-library-routing.module';
import { ShareModule } from './../shared/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeLibraryComponent } from './anime-library.component';
import { AnimeItemComponent } from './anime-item/anime-item.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';




@NgModule({
  declarations: [
    AnimeLibraryComponent,
    AnimeItemComponent,
    AnimeDetailsComponent,
 
  ],
  imports: [
    CommonModule,
    ShareModule,
    AnimeLibraryRoutingModule
  ],
  exports: [AnimeLibraryComponent]
})
export class AnimeLibraryModule { }
