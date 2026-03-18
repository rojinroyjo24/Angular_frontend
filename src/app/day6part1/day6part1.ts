import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mediator } from '../mediator';

@Component({
  selector: 'app-day6part1',
  imports: [FormsModule],
  templateUrl: './day6part1.html',
  styleUrl: './day6part1.css',
})
export class Day6part1 {

  constructor(private mid: Mediator ){}

  register(data:any){
    console.log(data);
    this.mid.getdatafromc1(data);



  }

}
