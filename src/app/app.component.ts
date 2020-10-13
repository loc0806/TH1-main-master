import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  today = new Date('09/01/2020');

  title = 'ChuyenDe4';
  a:string;
  b:string;
  mess:string;
  columns = [{
    hoten:'Đinh Văn Hải',lop:'TK15.4'
  },{
    hoten:'Cù Thị Lan',lop:'TK15.4'
  },{
    hoten:'Nguyễn Bá Hùng',lop:'TK15.4'
  }];
  giatritong: any;

  ngOnInit() { 
    let a = new PTB2(1,2,1);
    console.log(a.giaipt());
  }
  hienthi ='vn';
  // get format(){ 
  //   // return this.hienthi == 'vn'?
  // }
  Them(){
    let new_c:any[] = [{hoten:this.a,lop:this.b}];
    this.columns.push(new_c[0]);
    
  }
  Xoa(a:string){
    let index=this.columns.findIndex(x=>x.hoten==a);
    if(index!=-1){
      this.columns = this.columns.splice(0,index);
      // let tam:any[] =this.columns.splice(index,this.columns.length);
      // tam.forEach(element => {
      //   this.columns.push(element);
      // });
      

      console.log(this.columns);
    }
  }
  getSV(a:string,b:string){
    this.a=a;
    this.b=b;
    
  }
  Sua(a:string,b:string){
    let index=this.columns.findIndex(x=>x.hoten==a);
    if(index!=-1){
      this.columns[index].lop=b;
    }
    else this.mess="Không có sinh viên nào !!";
   

  }
  checkSua(a:string){
    
    console.log(this.columns.find(x=>x.hoten==a));

  }
  Tinh(){
   this.giatritong  =  Number.parseInt(this.a) +  Number.parseInt(this.b);    
}}
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