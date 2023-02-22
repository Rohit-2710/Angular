import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {

  courses = [
    	    { courseId: 1, courseName: "Node JS" },
    	    { courseId: 2, courseName: "Typescript" },
    	    { courseId: 3, courseName: "Angular" },
    	    { courseId: 4, courseName: "React JS" }
    	  ];
    

}
