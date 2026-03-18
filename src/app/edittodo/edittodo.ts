import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { MediatorApi } from '../mediator-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edittodo',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './edittodo.html',
  styleUrl: './edittodo.css',
})
export class Edittodo {

  constructor (private rut:ActivatedRoute, private route:Router,private mediator:MediatorApi){}

  idnum: any;
  mydata: any;
  ngOnInit():void{
    alert("todo edit page")
    const id=this.rut.snapshot.paramMap.get('id');
    console.log("editing with todo id :" + id);
    this.idnum=id;
    this.mediator.getTodoById(this.idnum).subscribe((data:any) =>{
      console.log(data);
      this.mydata=data;

    })
  }

  updateTodo(){
    console.log(this.idnum,this.mydata);
    this.mediator.updateTodo(this.idnum,this.mydata).subscribe(
      (response:any) =>{
        console.log("update sucess",response);
        alert("Todo updated sucessfulyy");
        this.route.navigate(["/Day8view"]);

      },

    );
  }

}
