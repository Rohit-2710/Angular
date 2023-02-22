import { Component } from '@angular/core';
import { book } from '../../../../Day5/src/app/book';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  b=new books();

}
export class books{
  name:string='';
}
