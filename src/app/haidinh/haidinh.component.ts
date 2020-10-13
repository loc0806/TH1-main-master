import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haidinh',
  templateUrl: './haidinh.component.html',
  styleUrls: ['./haidinh.component.css']
})
export class HaidinhComponent implements OnInit {
  todo = ['Hai ','Dep ','Trai '];
  constructor() { }

  ngOnInit(): void {
    
  }

}
