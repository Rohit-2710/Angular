import { Component, Input } from '@angular/core';
import {Store} from "@ngrx/store"
@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css']
})
export class CounteroutputComponent {
  counter:number;
  constructor(private store:Store<{counter : {counter:number}}>){}
  ngOninit(): void{
    this.store.select('counter').subscribe(data=>{
     this.counter = data.counter;
    })
  }
}
