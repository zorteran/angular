import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Song } from '../models/song.model';
import { SongService } from '../song.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.scss']
})
export class SongAddComponent implements OnInit, OnDestroy {

  private song: Song;
  destroy$ = new Subject();
  constructor(private router: Router, private songService: SongService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log('RESOLVED DATA', data);
    });
  }

  onCancel() {
    this.router.navigateByUrl('/music/songs/');
  }
  onSave(event: Partial<Song>) {
    console.log('$event', event);
    this.songService.addSong(event).pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(1);
  }

}
