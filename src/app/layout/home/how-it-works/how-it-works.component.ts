import { Component, OnInit } from '@angular/core';

const LIST_ITEMS = [
  {title: 'Select A Match', image:'assets/images/match.png', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
  {title: 'Create your Team', image:'assets/images/team.png', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
  {title: 'Join Contenst', image:'assets/images/contest.png', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
  {title: 'Win Cash', image:'assets/images/cash.png', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
];

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {
  listItems = LIST_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
