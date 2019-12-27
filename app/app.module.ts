import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [ // this is to register the component
    AppComponent
  ],
  imports: [ // As we are building browser application 
    BrowserModule, 
    CommonModule,
    FormsModule
  ],
  bootstrap: [ // this is to bootstrap the component which then corresponding in app-root 
    AppComponent
  ]  
})
export class AppModule {}
