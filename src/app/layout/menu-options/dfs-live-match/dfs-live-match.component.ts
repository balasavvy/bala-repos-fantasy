import { Component, OnInit } from '@angular/core';

const SFS_GAMES = [
  {
    team1: 'autralia',
    team2: 'hongkong',
    image_team1: 'assets/images/india-flag.png',
    image_team2: 'assets/images/hongkong-flag.jpg',
    price: 'Rs. 13440 to be won',
    date: '27 Sept, 4:00 PM'
  },
  {
    team1: 'india',
    team2: 'hongkong',
    image_team1: 'assets/images/india-flag.png',
    image_team2: 'assets/images/hongkong-flag.jpg',
    price: 'Rs. 15840 to be won',
    date: '21 Sept, 4:00 PM'
  },
  {
    team1: 'hongkong',
    team2: 'india',
    image_team1: 'assets/images/india-flag.png',
    image_team2: 'assets/images/hongkong-flag.jpg',
    price: 'Rs. 12840 to be won',
    date: '21 Sept 6:00 PM'
  }
]

@Component({
  selector: 'app-dfs-live-match',
  templateUrl: './dfs-live-match.component.html',
  styleUrls: ['./dfs-live-match.component.css']
})
export class DfsLiveMatchComponent implements OnInit {
  sfs_games = SFS_GAMES;
  constructor() { }

  ngOnInit() {
  }

}
