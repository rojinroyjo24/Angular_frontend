import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-day5',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './day5.html',
  styleUrl: './day5.css',
})
export class Day5 {

  register(val:any){
    console.log(val);
  }
  // ....................reactive forms........

  regForm: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.regForm = formBuilder.group({
      myname: new FormControl(),
      myemail: new FormControl(),
      myphone: new FormControl(),
    })
  }

  reg(data: any){
    console
  }





}
