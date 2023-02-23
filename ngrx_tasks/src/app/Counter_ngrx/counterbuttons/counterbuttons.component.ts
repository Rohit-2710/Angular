import { Component } from '@angular/core';
import {Store} from "@ngrx/store"
import { increment } from '../State/Counter.actions';
import { decrement } from '../State/Counter.actions';
import { reset } from '../State/Counter.actions';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css']
})
export class CounterbuttonsComponent {
constructor(private store:Store<{counter:{counter:number}}>){}
 onIncrement(){
  this.store.dispatch(increment());
 };
 onDecrement(){
  this.store.dispatch(decrement());
 };
 onReset(){
  this.store.dispatch(reset());
 };

}
