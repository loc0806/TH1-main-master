import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {

  constructor() { }
  s =[{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9},
  {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},
  { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}
  ];
  rs:any [] =[];
  ngOnInit(): void {
  }
  Loc(){
    this.rs = this.s.filter(x=>x.diemthi>8);
  }
}
