import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

const TABS = [
  {id: 'winBig' ,title: 'Win Big'},
  {id: 'playFree' ,title: 'Play Free'},
  {id: 'callTheShots' ,title: 'Call The Shots'},
  {id: 'beatYourFriends' ,title: 'Beat Your Friends'}
]  
  

@Component({
  selector: 'app-ways-to-win',
  templateUrl: './ways-to-win.component.html',
  styleUrls: ['./ways-to-win.component.css']
})
export class WaysToWinComponent implements OnInit {

  tabs = TABS;

  constructor() {
  }

  ngOnInit() {
  }
}
