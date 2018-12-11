import { Component, OnInit, Input, EventEmitter, Directive } from '@angular/core';

const CRICKET_RESULTS = { cricketResult: [
  { name : 'cricket',
  matchList: [
  {
    team1: 'assets/images/cricket-india.png',
    team2: 'assets/images/cricket-nz.png',
    type: 'T20',
    remainingTime: '06h 38m 22s',
  },
  {
    team1: 'assets/images/cricket-india.png',
    team2: 'assets/images/cricket-nz.png',
    type: 'T20',
    remainingTime: '06h 38m 22s',
  }
  ]
}
]}
const Football_RESULTS = { footballResult: [
  { name : 'football',
  matchList: [
  {
    team1: 'assets/images/cricket-india.png',
    team2: 'assets/images/cricket-nz.png',
    type: 'T20',
    remainingTime: '01h 58m 22s',
  },
  {
    team1: 'assets/images/cricket-india.png',
    team2: 'assets/images/cricket-nz.png',
    type: 'T20',
    remainingTime: '06h 58m 22s',
  }
  ]
}
]}

// const RESULTS = {
//   result: [
//     {
//       team1: 'AUS',
//       team2: 'NZ',
//       status: 'Completed',
//       desc: [
//         {
//           winnings: 100000,
//           team:     5000,
//           entry: 50,
//           winners: 70,
//           'joined with' : '1 Team'
//         }
//       ]
//     }
//   ]
// } 

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  cricketResults = CRICKET_RESULTS;
  footballResults = Football_RESULTS;
  // results = RESULTS;
  option:string;
  tab:string;
  suboption: string;
  constructor() { }
 
  ngOnInit() {
    this.option = 'My Contests'; 
    this.tab = 'Cricket'; 
  }

  selectTab($event) {
    this.option = $event; 
  }
  selectSubTab(tab, subtab) {
    this.tab = tab; 
    this.suboption = subtab;

  }

}
