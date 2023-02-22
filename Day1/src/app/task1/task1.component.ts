import { Component } from '@angular/core';
import { Login } from './login';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  login:Login =new Login();
 result:string=''; 
 validate() {
        if(this.login.id==="innovapptive" &&  this.login.pwd==="innovapptive")
         this.result="success";
       else
        this.result="success";
    }

}
