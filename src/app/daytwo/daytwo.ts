import { Component } from '@angular/core';

@Component({
  selector: 'app-daytwo',
  imports: [],
  templateUrl: './daytwo.html',
  styleUrl: './daytwo.css',
})
export class Daytwo {

  msg='HELLO,FROM DAY TWO COMPONENT';
  type="checkbox";
  display(s:string){
    alert("button clicked");
    console.log("button clicked");
    console.log(s)

  }

}
