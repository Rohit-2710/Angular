import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  firstname:string="";
  lastname:string="";
  email:string="";
  password:string=""
  conformpassword=""
  city:string="";

  onsubmit(){
    console.log('is write')
    console.log(this.firstname)
    console.log(this.lastname)
  }

}
