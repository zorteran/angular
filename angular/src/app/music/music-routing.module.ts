import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: 'artist/:id',
        component: ArtistComponent
      },
      {
        path: 'artist-edit/:id',
        component: ArtistEditComponent
      }
    ]
  }, {
    path: 'artist/:id',
    component: ArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
