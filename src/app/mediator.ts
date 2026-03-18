import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mediator {

  senddata:any;

  getdatafromc1(frmc1:any){
    console.log("data from c1",frmc1)

    this.senddata = frmc1;

  }

  senddatatoc2(){
    console.log("data to c2");
    return this.senddata;
  }
  
}
