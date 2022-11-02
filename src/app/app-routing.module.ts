import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeLibraryModule } from './anime-library/anime-library.module';

const routes: Routes = [
  {path:'', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'anime-library', loadChildren: () => AnimeLibraryModule, data: {breadcrumb: 'Anime Library'}},
  {path: 'account', loadChildren: ()=> import('./account/account.module').then(mods => mods.AccountModule), data: {breadcrumb: {skip: true}}},
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
