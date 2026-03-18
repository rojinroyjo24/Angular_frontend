import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Mediator } from '../mediator';

@Component({
  selector: 'app-day6part2',
  imports: [JsonPipe],
  templateUrl: './day6part2.html',
  styleUrl: './day6part2.css',
})
export class Day6part2 {

  constructor(private mid: Mediator ){ 

  }
  mydata:any;

  ngOnInit(){
    console.log('......day6 part2')
    this.mydata = this.mid.senddatatoc2();
    console.log("data in c2",this.mydata);

  }

}
