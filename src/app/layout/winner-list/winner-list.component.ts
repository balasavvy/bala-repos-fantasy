import { Component, OnInit } from '@angular/core';

const LIST = [
  {
    team: 'Team 1',
    rank: 32
  },
  {
    team: 'Team 2',
    rank: 15
  },
  {
    team: 'Team 3',
    trophy: 'assets/images/trophy.png',
    desc: 'All hail the champion!',
    rank: 30
  },
  {
    team: 'Team 4',
    rank: 32
  },
  {
    team: 'Team 5',
    rank: 15
  },
  {
    team: 'Team 6',
    rank: 30
  }
]
@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.css']
})
export class WinnerListComponent implements OnInit {
  list = LIST;
  isActiveId;
  
  constructor() { }

  ngOnInit() {
    this.isActiveId = 'Team 3';
  }

  selectRow(i) {
    this.isActiveId = i;
  }
}
