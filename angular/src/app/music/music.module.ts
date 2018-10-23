import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { SearchComponent } from './search/search.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { ImageBaseUrlPipe } from './pipes/image-base-url.pipe';
import { ArtistComponent } from './artist/artist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule
  ],
  declarations: [SearchComponent, ArtistProfileComponent, ImageBaseUrlPipe, ArtistComponent]
})
export class MusicModule { }
