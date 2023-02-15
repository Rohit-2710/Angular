import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent {
  @Input() myinput:string="";
  @Output() myOutput:EventEmitter<string>= new EventEmitter();  
  outputMessage:string="I am child component."
 sendvalues(){
  this.myOutput.emit(this.outputMessage);
 }

}
