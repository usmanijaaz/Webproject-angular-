import { Courses } from './../../Courses';
import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css'],
})
export class BaseComponentComponent implements OnInit {
  @Input()
  course!: Courses;

  // constructor() {
  //   console.log(this.course);
  // }
  @Output() courses!: Courses[];
  constructor() {
    this.courses = [
      {
        title: 'Course',
        subTitle: 'Learn JavaScript',
        description: 'Beginner friendly, 11 Lessons',
        imageUrl:
          'https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        outterClass: 'main-single-div',
        middleClass: 'single-div',
        innerClass: 'single-outer-div1',
        title1: '',
        description1: '',
        imageUrl1: '',
        mainDescription: '',
      },
      {
        title: 'Explore All',
        subTitle: 'Python',
        description: '',
        imageUrl: '',
        outterClass: 'main-div1',
        middleClass: 'outer-div',
        innerClass: 'inner-div',
        title1: '',
        description1: '',
        imageUrl1: '',
        mainDescription: '',
      },
      {
        title: 'Couser',
        subTitle: 'Learn JavaScript',
        description: 'Beginner friendly, 11 Lessons',
        imageUrl: '',
        outterClass: 'main-outer-div',
        middleClass: 'outer-div1',
        innerClass: 'inner-div1',
        title1: '',
        description1: '',
        imageUrl1: '',
        mainDescription: '',
      },
      {
        title: '',
        subTitle: 'Not sure where to begin?',
        title1: ' Take our quiz →',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: 'main-div12',
        innerClass: 'inner-div12',
        description1: '',
        imageUrl1: '',
        mainDescription: '',
      },
      {
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',

        imageUrl1: '',
        mainDescription: '',
        description1: 'What is a Programming Languages',
        title1: 'VIDEO',
      },
      {
        title: '',
        subTitle: '',
        title1: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',
        mainDescription: '',
        description1: '',
        imageUrl1:
          'https://static-assets.codecademy.com/assets/components/resources/article/standard/group-7.svg',
      },
      {
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',
        mainDescription: '',
        imageUrl1: '',
        description1: 'Our First Mobile Developement Part Has Arrived',
        title1: 'VIDEO',
      },
      {
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',
        mainDescription: '',
        imageUrl1: '',
        description1: 'How to Think Like a Programmer',
        title1: 'VIDEO',
      },
      {
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',
        imageUrl1: '',
        description1: '',
        mainDescription: 'Our Best Resources For Students',
        title1: 'RESOURCE',
      },
      {
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',
        mainDescription: '',
        imageUrl1:
          'https://static-assets.codecademy.com/assets/components/resources/blog/standard/group-59.svg',
        description1: 'How to stay motivated when learning to code',
        title1: 'Blog',
      },
      {
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',
        mainDescription: '',
        imageUrl1:
          'https://static-assets.codecademy.com/assets/components/resources/blog/standard/group-60.svg',
        description1: 'What does a Data Scientist do?',
        title1: 'Blog',
      },
      {
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        outterClass: '',
        middleClass: '',
        innerClass: '',
        mainDescription: '',
        imageUrl1:
          'https://static-assets.codecademy.com/assets/components/resources/video/standard/group-79.svg',
        description1: 'What Programming Language Should You Learn?',
        title1: 'VIDEO',
      },
    ];
    console.log('this.courses', this.courses);
  }

  ngOnInit(): void {}
}
