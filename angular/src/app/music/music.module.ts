import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { SearchComponent } from './search/search.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [SearchComponent, ArtistProfileComponent]
})
export class MusicModule { }
