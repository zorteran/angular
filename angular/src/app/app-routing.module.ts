import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './shared/map/map.component';
import { ArtistComponent } from './music/artist/artist.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
  },
  {
    path: 'music',
    loadChildren: './music/music.module#MusicModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
