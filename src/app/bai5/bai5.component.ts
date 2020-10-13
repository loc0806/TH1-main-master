import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {

  constructor() { }

  
  
  ngOnInit(): void {
    let a = new PTB2(1,0,0);
    console.log(a.giaipt());
  }

}
export class PTB2{
  private a:number;
  private b:number;
  private c:number;
  constructor(a:number,b:number,c:number){
    this.a=a;
    this.b=b;this.c=c;
  }
  public giaipt():number[]{
    let kq:any;
    let delta = this.b*this.b-4*this.a*this.c;
    if(delta==0){
      kq = [-this.b/(2*this.a)];
    }
    else if(delta > 0){
      kq = [(-this.b+Math.sqrt(delta))/(2*this.a),(-this.b-Math.sqrt(delta))/(2*this.a)];
    }
    else{
      kq = [null];
    }
    return kq;
  }
}
export class PTTP extends PTB2 {
  constructor(a:number,b:number,c:number){
    super(a,b,c);
  }
  public giaiPT():number[]{
    let kq:number[];
    kq = this.giaipt();
    kq = kq.filter(x=>x>=0);
    let rs:number[];
    kq.forEach(e=>{
      rs.push(Math.sqrt(e));
      rs.push(-Math.sqrt(e));
    })
    return rs;
  }
}