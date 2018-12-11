import { Component, OnInit } from '@angular/core';

const LIST = [
  {
    id: 1,
    name: 'Brendon Mccullum',
    photo: 'assets/images/user.png',
    bat: 'BAT',
    icons: [
      'c','wc'
    ]
  },
  {
    id: 2,
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 'bat',
    icons: [
      'c','wc'
    ]
  },
  {
    id: 3,
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 'bat',
    icons: [
      'c','wc'
    ]
  },
  {
    id: 4,
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 'otto',
    icons: [
      'c','wc'
    ]
  },
  {
    id: 5,
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 'ALL',
    icons: [
      'c','wc'
    ]
  },
  {
    id: 6,
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 'WC',
    icons: [
      'c','wc'
    ]
  },
  {
    id: 7,
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 'otto',
    icons: [
      'c','wc'
    ]
  }
]

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  lists = LIST;

  isActiveId;
  constructor() { }

  ngOnInit() {
  }

  selectRow(i) {    
    this.isActiveId = i;
  }
}
