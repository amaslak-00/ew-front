import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'anime-library', loadChildren: ()=> import('./anime-library/anime-library.module').then(mods => mods.AnimeLibraryModule), data: {breadcrumb: 'Anime Library'}},
  {path: 'account', loadChildren: ()=> import('./account/account.module').then(mods => mods.AccountModule), data: {breadcrumb: {skip: true}}},
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
