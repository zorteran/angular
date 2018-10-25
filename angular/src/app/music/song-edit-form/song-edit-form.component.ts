import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Song } from '../models/song.model';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-edit-form',
  templateUrl: './song-edit-form.component.html',
  styleUrls: ['./song-edit-form.component.scss']
})
export class SongEditFormComponent implements OnInit, OnChanges {


  @Output() cancel = new EventEmitter();
  @Input() song: Song;
  @Output() save = new EventEmitter();

  songForm = this.fb.group({
    id: [''],
    title: ['', Validators.required],
    year: ['', Validators.required],
    favorite: [false, Validators.required],
    genders: this.fb.array([
    ])
  });



  get genders() {
    return this.songForm.get('genders') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('song', this.song);

  }

  ngOnChanges() {
    console.log('song', this.song);
    this.songForm.patchValue(this.song);
  }

  onSubmit() {
    console.log(this.songForm.getRawValue());

    this.save.emit(this.songForm.getRawValue());
  }

  onCancel() {
    this.cancel.emit();
  }
  addGender() {
    this.genders.push(this.fb.control(''));
  }
  removeGender(i) {
    this.genders.removeAt(i);
  }

}
