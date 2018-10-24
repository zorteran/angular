import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { FormControl } from '@angular/forms';
import { MusicService } from '../music.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit, OnDestroy {
  isEdited = false;
  destroy$ = new Subject();
  name = new FormControl('');
  @Input() playlist: Playlist;
  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  startEdit() {
    this.isEdited = true;
  }

  edit() {
    if (!(this.name.value === '')) {
      this.playlist.name = this.name.value;
      this.musicService.updatePlaylist(this.playlist.id, this.playlist).pipe(
        takeUntil(this.destroy$)
      ).subscribe();
    }
    this.isEdited = false;
  }

  delete() {
    this.musicService.deletePlaylist(this.playlist.id).pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
