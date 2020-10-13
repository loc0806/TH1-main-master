import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaidinhComponent } from './haidinh/haidinh.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai5Component } from './bai5/bai5.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

import { DateVNPipe } from './date-vn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HaidinhComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai5Component,
    MenuComponent,
    DateVNPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
