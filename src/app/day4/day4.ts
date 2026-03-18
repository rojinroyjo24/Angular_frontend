import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SamplepipePipe } from '../samplepipe-pipe';

@Component({
  selector: 'app-day4',
  imports: [JsonPipe,UpperCasePipe,LowerCasePipe, CurrencyPipe,DatePipe,SamplepipePipe],
  templateUrl: './day4.html',
  styleUrl: './day4.css', 
})
export class Day4 {

  day:string = '1'

  employee={
    name:'John Doe',
    dob:"12-5-2002",
    salary:5000
  }

}
