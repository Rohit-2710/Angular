import { Component, Output, EventEmitter } from '@angular/core';
import { reg } from './registration';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(){}
  @Output() onRegister = new EventEmitter<string>();
  courseReg:reg[]=[
    { courseId: 1, courseName: "Node JS" },
    { courseId: 2, courseName: "Typescript" },
    { courseId: 3, courseName: "Angular" },
    { courseId: 4, courseName: "React JS" }


  ];
  register(courseName:string){
    this.onRegister.emit(courseName);
  }


}
