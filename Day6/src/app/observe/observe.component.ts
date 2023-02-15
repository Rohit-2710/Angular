import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent {
  
  constructor(){}
  ngOnInit(){
    const sqnc = new Observable(countOnetoTen);
    sqnc.subscribe({
      next(num:any) {console.log(num);}
    })
    function countOnetoTen(observer:any){
      for(var i=1;i<10;i++){
        observer.next(i);
      }
      return {unsubscribe(){}}
    }
  }

}
