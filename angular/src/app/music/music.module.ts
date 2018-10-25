import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { SearchComponent } from './search/search.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { ImageBaseUrlPipe } from './pipes/image-base-url.pipe';
import { ArtistComponent } from './artist/artist.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistProfileComponent } from './playlist-profile/playlist-profile.component';
import { SongComponent } from './song/song.component';
import { AddSongComponent } from './add-song/add-song.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { SongEditFormComponent } from './song-edit-form/song-edit-form.component';
import { SongsComponent } from './songs/songs.component';
import { SongAddComponent } from './song-add/song-add.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongViewComponent } from './song-view/song-view.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, ArtistProfileComponent, ImageBaseUrlPipe,
    ArtistComponent, ArtistEditComponent, PlaylistComponent,
    PlaylistProfileComponent, SongComponent, AddSongComponent,
    PlaylistItemComponent, SongEditFormComponent, SongsComponent,
    SongAddComponent, SongEditComponent, SongViewComponent]
})
export class MusicModule { }
