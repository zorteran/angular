import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistProfileComponent } from './playlist-profile/playlist-profile.component';
import { AddSongComponent } from './add-song/add-song.component';
import { SongEditFormComponent } from './song-edit-form/song-edit-form.component';
import { SongsComponent } from './songs/songs.component';
import { SongComponent } from './song/song.component';
import { SongViewComponent } from './song-view/song-view.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongAddComponent } from './song-add/song-add.component';

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
  },
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
  {
    path: 'playlist',
    component: SongEditFormComponent, // tymczasowo, noramlnie PlaylistComponent
    children: [
      {
        path: 'playlist-profile/:id',
        component: PlaylistProfileComponent
      },
      {
        path: 'add-song/:id',
        component: AddSongComponent
      }
    ]
  },
  {
    path: 'songs',
    component: SongsComponent,
    children: [
      {
        path: 'add-song',
        component: SongAddComponent
      },
      {
        path: 'edit-song/:id',
        component: SongEditComponent
      },
      {
        path: ':id',
        component: SongViewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
