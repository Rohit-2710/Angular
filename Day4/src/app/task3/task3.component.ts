import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  courses=[ { courseId: 1, courseName: "Node JS" },
  	    { courseId: 2, courseName: "Typescript" },
  	    { courseId: 3, courseName: "Angular" },
	    { courseId: 4, courseName: "React JS" }
  	  ];

  @Input() cName:string='';
  	
  

}
