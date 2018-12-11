import { Component, OnInit } from '@angular/core';

const UPCOMING_MATCHS = { upcomingMatch: [
    { name : 'cricket',
    matchList: [
    {
      team1: 'assets/images/united-kingdom-flag.png',
      team2: 'assets/images/pakistan-flag.png',
      teamName1: 'England',
      teamName2: 'Pakistan',
      type: 'T20',
      remainingTime: '06h 38m 22s',
    },
    {
      team1: 'assets/images/united-kingdom-flag.png',
      team2: 'assets/images/pakistan-flag.png',
      teamName1: 'England',
      teamName2: 'Pakistan',
      type: 'T20',
      remainingTime: '06h 38m 22s',
    },
    {
      team1: 'assets/images/united-kingdom-flag.png',
      team2: 'assets/images/pakistan-flag.png',
      teamName1: 'England',
      teamName2: 'Pakistan',
      type: 'T20',
      remainingTime: '06h 38m 22s',
    },
    {
      team1: 'assets/images/united-kingdom-flag.png',
      team2: 'assets/images/pakistan-flag.png',
      teamName1: 'England',
      teamName2: 'Pakistan',
      type: 'T20',
      remainingTime: '06h 38m 22s',
    },
    {
      team1: 'assets/images/united-kingdom-flag.png',
      team2: 'assets/images/pakistan-flag.png',
      teamName1: 'England',
      teamName2: 'Pakistan',
      type: 'T20',
      remainingTime: '06h 38m 22s',
    },
    ]
  },
  // { name : 'football',
  //   matchList: [
  //   {
  //     team1: 'assets/images/india.png',
  //     team2: 'assets/images/australia.png',
  //     type: 'T20',
  //     remainingTime: '06h 38m 22s',
  //   },
  //   {
  //     team1: 'assets/images/india.png',
  //     team2: 'assets/images/australia.png',
  //     type: 'T20',
  //     remainingTime: '06h 38m 22s',
  //   },
  //   {
  //     team1: 'assets/images/india.png',
  //     team2: 'assets/images/australia.png',
  //     type: 'T20',
  //     remainingTime: '06h 38m 22s',
  //   },
  //   {
  //     team1: 'assets/images/india.png',
  //     team2: 'assets/images/australia.png',
  //     type: 'T20',
  //     remainingTime: '06h 38m 22s',
  //   },
  //   {
  //     team1: 'assets/images/india.png',
  //     team2: 'assets/images/australia.png',
  //     type: 'T20',
  //     remainingTime: '06h 38m 22s',
  //   },
  //   ]
  // },
  ]}

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {
  upcomingMatches = UPCOMING_MATCHS;
  constructor() { }

  ngOnInit() {
    
  }

}
