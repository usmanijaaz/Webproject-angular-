import { Courses } from './../../Courses';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-image-s',
  templateUrl: './div-image-s.component.html',
  styleUrls: ['./div-image-s.component.css'],
})
export class DivImageSComponent implements OnInit {
  @Input() course!: Courses;
  constructor() {
    console.log(this.course);
  }

  ngOnInit(): void {}
}
