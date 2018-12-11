import { Component, OnInit } from '@angular/core';
const LEADERBOARD = [
  {
    photo: 'assets/images/leaderboard-1.jpg',
    title: 'FIFA World Cup 2018',
    details: [
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahi',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Moni',
        points: '1242'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Monark',
        points: '4312'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Neil',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahul',
        points: '4545'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahi',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Moni',
        points: '1242'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Monark',
        points: '4312'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Neil',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahul',
        points: '4545'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Jack',
        points: '1342'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Sirish',
        points: '1652'
      }
    ]
  },
  {
    photo: 'assets/images/leaderboard-2.jpg',
    title: 'INDIAN T20 LEAGUE',
    details: [
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1422'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mahi',
        points: '12425'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Akash',
        points: '1882'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Dev',
        points: '1452'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      }
    ]
  },
  {
    photo: 'assets/images/leaderboard-2.jpg',
    title: 'Indian T20 League',
    details: [
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      }
    ]
  },
  {
    photo: 'assets/images/leaderboard-2.jpg',
    title: 'Indian T20 League',
    details: [
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      }
    ]
  }
]


@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  leaderboard = LEADERBOARD;
  leaderboardName;
  leaderboardDetails = [];
  constructor() { }

  ngOnInit() {
    this.leaderboardName = this.leaderboard[0].title;
    this.leaderboardDetails = this.leaderboard[0].details;      
  }

  selcetCurrentList(leaderboardData) {
    this.leaderboardName = leaderboardData.title;    
    for(var i=0; i<leaderboardData.details.length; i++ ) {
      this.leaderboardDetails = leaderboardData.details;  
    }
  }

}
