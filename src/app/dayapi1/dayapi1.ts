import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { MediatorApi } from '../mediator-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dayapi1',
  imports: [FormsModule],
  templateUrl: './dayapi1.html',
  styleUrl: './dayapi1.css',
})
export class Dayapi1 {
  constructor(private mediatorAPI: MediatorApi, private route:Router){}

    create(data:any){
      console.log(data);

      this.mediatorAPI.savetodo(data).subscribe(
        (response: any) => {
          console.log("Saved Sucessfully:", response);
          alert("To -do item saved sucessfully");
          this.route.navigate(['/Day8view'])
        },
        (error: any) =>{
          console.log("Eror Saving:", error);
        }
      );

      



  }


}
