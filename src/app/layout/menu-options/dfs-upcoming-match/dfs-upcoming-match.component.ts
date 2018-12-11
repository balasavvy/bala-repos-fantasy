import { Component, OnInit } from '@angular/core';
const DFS_GAMES = [
  {
    team1: 'England',
    team2: 'Pakistan',
    image_team1: 'assets/images/united-kingdom-flag.png',
    image_team2: 'assets/images/pakistan-flag.png',
    price: 'Rs. 13345 to be won',
    date: '20 Sept, 4:00 PM',
    type: 'T20',
    remainingTime: '06h 38m 22s',    
  },
  {
    team1: 'England',
    team2: 'Pakistan',
    image_team1: 'assets/images/united-kingdom-flag.png',
    image_team2: 'assets/images/pakistan-flag.png',
    price: 'Rs. 15840 to be won',
    date: '21 Sept, 4:00 PM',
    type: 'T20',
    remainingTime: '06h 38m 22s',    
  },
  {
    team1: 'Engalnd',
    team2: 'Pakistan',
    image_team1: 'assets/images/united-kingdom-flag.png',
    image_team2: 'assets/images/pakistan-flag.png',
    price: 'Rs. 15840 to be won',
    date: '21 Sept 4:00 PM',
    type: 'T20',
    remainingTime: '06h 38m 22s',    
  }
]


@Component({
  selector: 'app-dfs-upcoming-match',
  templateUrl: './dfs-upcoming-match.component.html',
  styleUrls: ['./dfs-upcoming-match.component.css']
})
export class DfsUpcomingMatchComponent implements OnInit {
  dfs_games = DFS_GAMES;
  constructor() { }

  ngOnInit() {
  }

}
