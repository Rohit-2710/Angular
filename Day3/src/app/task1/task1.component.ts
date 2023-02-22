import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  onClickSubmit(data: any) {
    alert("Entered Email id : " + data.emailid);
  }

}
