import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Song } from '../models/song.model';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-edit-form',
  templateUrl: './song-edit-form.component.html',
  styleUrls: ['./song-edit-form.component.scss']
})
export class SongEditFormComponent implements OnInit {


  @Output() cancel = new EventEmitter();
  @Input() song: Song;
  @Output() save = new EventEmitter();

  songForm = this.fb.group({
    title: ['', Validators.required],
    year: ['', Validators.required],
    favorite: [false, Validators.required],
    genders: this.fb.array([
    ])
  });



  get genders() {
    return this.songForm.get('genders') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('SUBMIT', this.songForm.valid, this.songForm.value);
    this.save.emit(this.songForm.value);

  }

  onCancel() {
    console.log('cancel');
    this.router.navigateByUrl('/music/songs');
  }
  addGender() {
    this.genders.push(this.fb.control(''));
  }

}
