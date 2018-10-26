import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './shared/map/map.component';
import { ArtistComponent } from './music/artist/artist.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
  },
  {
    path: 'music',
    loadChildren: './music/music.module#MusicModule'
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
