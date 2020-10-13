import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  constructor() { }
  n:any ;
  x:any;
  mess:string;
  rs:number=0;
  rs1:number =0;
  ngOnInit(): void {
  }
  Bai1(){
    //this.rs=0;
    console.log(this.x);
    for(let i=1;i<=Number.parseInt(this.n);i++){
      this.rs += Math.pow(Number.parseInt(this.x),i);
    }
    
  }
  Bai2(){
    let gt =1;
    this.rs=0;
    for(let i=1;i<=Number.parseInt(this.n);i++){
      gt *= i;
      this.rs += Math.pow(-1,i)*Math.pow(Number.parseInt(this.x),i)/gt;
      
    }
  }
}
