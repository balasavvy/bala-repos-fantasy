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
        name: 'Monark',
        points: '1242'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rudra',
        points: '1422'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Akash',
        points: '2022'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahi',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Swapnil',
        points: '1365'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Mousam',
        points: '1222'
      },
      {
        photo: 'assets/images/user.png',
        name: 'Rahul',
        points: '13422'
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
    title: 'INDIAN T20 LEAGUE',
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
    title: 'INDIAN T20 LEAGUE',
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
    title: 'INDIAN T20 LEAGUE',
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
    title: 'INDIAN T20 LEAGUE',
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
    title: 'INDIAN T20 LEAGUE',
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
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
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
