import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }
  s = [{hoten:'Nguyen Van Anh',dthi:9.5},
  {hoten:'Tran Thi Mai',dthi:10.5},
  {hoten:'Hoan Anh Dung',dthi:5.5}
  ];
  
  ngOnInit(): void {
  }
  
  Sort(){ 
    let catten = (s) => {
      let n =  s.lastIndexOf(' ');
      return s.substr(n+1) + ' ' + s.substr(0,n);
    }
    this.s.sort((a,b)=> {
    if(catten(a.hoten)>catten(b.hoten)) return 1;
    else if(catten(a.hoten)<catten(b.hoten)) return -1;
    return 0;
    })
  }
  
}
