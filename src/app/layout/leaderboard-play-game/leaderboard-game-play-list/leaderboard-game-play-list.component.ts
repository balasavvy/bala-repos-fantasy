import { Component, OnInit, ViewChild } from '@angular/core';
const LEADERBOARD = [
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        run: 39,
        bowl: 78,
        stroke_rate: 200,
        four: 2,
        six: 4
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahi',
        run: 39,
        bowl: 78,
        stroke_rate: 200,
        four: 2,
        six: 4
      },
      {
        photo: 'assets/images/user.png',
        name: 'Moni',
        run: 39,
        bowl: 78,
        stroke_rate: 200,
        four: 2,
        six: 4
      },
      {
        photo: 'assets/images/user.png',
        name: 'Monark',
        run: 39,
        bowl: 78,
        stroke_rate: 200,
        four: 2,
        six: 4
      },
      {
        photo: 'assets/images/user.png',
        name: 'Neil',
        run: 39,
        bowl: 78,
        stroke_rate: 200,
        four: 2,
        six: 4
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahul',
        run: 39,
        bowl: 78,
        stroke_rate: 200,
        four: 2,
        six: 4
      }  
]


@Component({
  selector: 'app-leaderboard-game-play-list',
  templateUrl: './leaderboard-game-play-list.component.html',
  styleUrls: ['./leaderboard-game-play-list.component.css']
})
export class LeaderboardGamePlayListComponent implements OnInit {
  leaderboard = LEADERBOARD;

  constructor() { }

  ngOnInit() {
  }
}
