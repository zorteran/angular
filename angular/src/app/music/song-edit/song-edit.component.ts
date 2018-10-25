import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SongService } from '../song.service';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.scss']
})
export class SongEditComponent implements OnInit {
  destroy$ = new Subject();
  song$;
  constructor(private router: Router, private songService: SongService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.song$ = this.route.paramMap.pipe(
      switchMap((data) => {
        return this.songService.getSong(data.get('id'));
      })
    );
  }

  onCancel() {
    this.router.navigateByUrl('/music/songs/');
  }
  onSave(event: Partial<Song>) {
    console.log('$event', event);
    this.songService.editSong(event.id, event).pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

}
