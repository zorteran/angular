import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService
  ) { }
  artist$;
  artistForm: FormGroup;


  ngOnInit() {
    this.artist$ = this.route.paramMap.pipe(
      switchMap((paramsMap) => {
        return this.musicService.getArtist(paramsMap.get('id'));
      }),
      tap((artist) => {
        this.artistForm.patchValue(artist);
      })
    );

    this.artistForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      img: new FormControl(''),
    });
  }

  public save() {
    console.log('DATA', this.artistForm.getRawValue());
    const data = this.artistForm.getRawValue();
    this.musicService.updateArtist(data.id, data).subscribe(res => {
      console.log('RES', res);
    });
  }
}
