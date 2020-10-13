import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  menus = [
    {name:'Trang chủ',url:'#',disabled:false,child:null},
    {name:'Các hãng sản xuất',disabled:false,url:'#',child:[{name:'Apple',url:'#'},{name:'SamSung',url:'#'},{name:'-',url:'#'},{name:'Vsmart',url:'#'},{name:'Bphone',url:'#'}]},
    {name:'Tin tức',url:'#',disabled:true,child:null},
    {name:'Trợ giúp',url:'#',disabled:true,child:null}
  ];
  ngOnInit(): void {
  }

}
