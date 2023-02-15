import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
outputdata:any;
title = "Angular Promises Example";
API_KEY = "e40d07f00b094602953cc3bf8537477e";
constructor(private httpClient:HttpClient){}
  ngOnInit(){
    console.log("Angular 10 promises");
    this.fetchDataAsPromise()
    .then((data:any)=>{
      console.log(JSON.stringify(data));
      this.outputdata=JSON.stringify(data);
    })
    .catch((error:any)=>{
      console.log("Promise rejected with error:"+ JSON.stringify(error));
    })

  }
  fetchDataAsPromise(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`).toPromise();
  }
}


