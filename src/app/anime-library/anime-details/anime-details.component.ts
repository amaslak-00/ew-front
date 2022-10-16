import { AnimeLibraryService } from './../anime-library.service';
import { Component, OnInit } from '@angular/core';
import { IAnime } from 'src/app/shared/models/anime';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';


@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  anime: IAnime;
  constructor(private AnimeLibraryService: AnimeLibraryService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.loadAnime();
  }

  loadAnime(){
    this.AnimeLibraryService.getAnimeById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(anime => {
      this.anime = anime;
      this.bcService.set('@AnimeDetails', anime.title)
    }, error=>{
      console.log(error);
    })
  }
}
