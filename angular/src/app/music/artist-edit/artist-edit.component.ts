import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../music.service';
import { switchMap, tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private router: Router
  ) { }
  artist$;
  artistForm: FormGroup;
  destroy$ = new Subject();

  ngOnInit() {
    this.artist$ = this.route.paramMap.pipe(
      takeUntil(this.destroy$),
      switchMap((paramsMap) => {
        return this.musicService.getArtist(paramsMap.get('id'));
      })
    ).subscribe((artist) => {
      this.artistForm.patchValue(artist);
    });

    this.artistForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      img: new FormControl(''),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
  }

  public save() {
    console.log('DATA', this.artistForm.getRawValue());
    const data = this.artistForm.getRawValue();
    this.musicService.updateArtist(data.id, data).subscribe(res => {
      console.log('RES', res);
      this.router.navigate(['music', 'search', 'artist', data.id]);
    });
  }
}
