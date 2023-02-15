import { Component } from '@angular/core';
import { DateServiceService } from './date-service.service';
import { BookServiceService } from './book-service.service';
import { book } from './book';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5Services';
  today:any;
  
  myInputMessage:string="From parent"
  name:string="";
  books:book[]=[];
  message:string="";
  courseReg(courseName:string){
    this.message=`Your registration for ${courseName} is successfull`;
  }
  // GetOutput(data:any){
    // console.log(data);

  // }

  // constructor( private dateservice:DateServiceService, private bookservice: BookServiceService){
    
   
  }

  
  // ngOnInit(){
  //   this.today=this.dateservice.getTodayDate()
  //   this.books=this.bookservice.getAllBooks()

  // }

