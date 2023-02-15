import { Component,Input } from '@angular/core';
import {Course} from './Course'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(){}
  Courses:Course[]=[
      { courseId: 1, courseName: "Node JS" },
      { courseId: 2, courseName: "Typescript" },
	    { courseId: 3, courseName: "Angular" },
      { courseId: 4, courseName: "React JS" }
  ];

@Input() cName:string="";
  


}
