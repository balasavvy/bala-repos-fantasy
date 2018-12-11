import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
 
  constructor() {
   
  }
  ngOnInit() {
   
  }
 
  
  activeSignup() {
    $('#login-tab, #login').removeClass('active');
    $('#signup-tab, #signup').addClass('active');
  }
   
  
}
