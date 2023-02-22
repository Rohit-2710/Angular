import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit  {
  @Input() myinputMssg:string="";
  constructor(){}
  ngOnInit(){
    console.log(this.myinputMssg);
  }

}
