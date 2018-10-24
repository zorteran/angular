import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-song-edit-form',
  templateUrl: './song-edit-form.component.html',
  styleUrls: ['./song-edit-form.component.scss']
})
export class SongEditFormComponent implements OnInit {


  song = {
    'id': 27,
    'title': 'Don\'t Look Back in Anger',
    'year': '1996',
    'artistId': 19,
    'webUrl': 'http://www.songnotes.cc/songs/100-oasis-dont-look-back-in-anger'
  };

  songForm = this.fb.group({
    title: ['', Validators.required],
    year: ['', Validators.required],
    favorite: [false, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('SUBMIT', this.songForm.value);
    
  }

}
