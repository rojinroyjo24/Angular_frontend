import { Component } from '@angular/core';
import { MediatorApi } from '../mediator-api';
import { Router } from '@angular/router';



@Component({
  selector: 'app-day8view',
  imports: [],
  templateUrl: './day8view.html',
  styleUrl: './day8view.css',
})
export class Day8view {

  mydata: any;

  constructor(private mediator:MediatorApi,private route:Router) { }


  ngOnInit(): void {

    this.mediator.getTodos().subscribe((data: any)=>{
      console.log(data);
      this.mydata = data;
    });
  }

  deleteTodo(id: number){
    console.log("Deleting todo with id:" + id);
    this.mediator.deleteTodo(id).subscribe((response: any) => {
      console.log(response);
      alert("Todo deleted Sucessfully");
      this.ngOnInit();
    })
  }

  editTodo(id: number){
    console.log("editing todo with ID:" + id);
    this.mediator.getTodoById(id).subscribe((data: any) => {
      console.log(data); 
      alert("editning to with ID :" +id);
      this.route.navigate(['/Edit',id]);
    })
  }

}
