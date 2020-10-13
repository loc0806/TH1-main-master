import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {

  constructor() { }
  s:number[]=[2,5,6,1,9,16,25,99,100];
  a:string;
  tam:any;
  mess:string;
  class:string;
  tong:number=0;
  ngOnInit(): void {
  }
  locCP(){
    this.tam=[];
    this.mess="";
    this.class="";
    if(this.a==""||this.a==null||this.a.search(',')==-1)
    {
      this.class="alert alert-danger col-sm-4";
      this.mess="Đầu vào không đúng !";
    }
    else{
      this.tam= this.a.split(',');
    
    this.tam=this.tam.filter(x=>Math.pow(Math.floor(Math.sqrt(x)),2)==x);
    }
  }
  tongNguyen(){
    this.tong=0;
    this.mess="";
    this.tam=[];
    this.class="";
    if(this.a==""||this.a==null||this.a.search(',')==-1)
    {
      this.class="alert alert-danger col-sm-4";
      this.mess="Đầu vào không đúng !";
    }
    else{
      this.tam= this.a.split(',');
    this.tam.forEach(element => {
      if(element>0){
      this.tong += Number.parseInt(element);
      }
    });
  }
  }
}
