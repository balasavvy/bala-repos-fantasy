import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayersComponent } from '../players/players.component';

const LIST = [
  {
    name: 'John Doe', 
    team: 'Team 1',
    point: 412,
    rank: 32
  },
  {
    name: 'John Doe',
    team: 'Team 2',
    point: 412,
    rank: 15
  },
  {
    name: 'John Doe',
    team: 'Team 3',
    point: 412,
    rank: 30
  },
  {
    name: 'John Doe',
    team: 'Team 4',
    point: 412,
    rank: 32
  },
  {
    name: 'John Doe',
    team: 'Team 5',
    point: 412,
    rank: 15
  },
  {
    name: 'John Doe',
    team: 'Team 6',
    point: 412,
    rank: 30
  }
]

@Component({
  selector: 'app-leaderboard-play-game',
  templateUrl: './leaderboard-play-game.component.html',
  styleUrls: ['./leaderboard-play-game.component.css']
})
export class LeaderboardPlayGameComponent implements OnInit {

  list = LIST;
  isActiveId;
  @ViewChild('players')
  private players: PlayersComponent;

  
  constructor() { }

  ngOnInit() {
    this.isActiveId = 'Team 3';
  }

  selectRow(i) {
    this.isActiveId = i;
    this.players.addPlayer();
  }

}
