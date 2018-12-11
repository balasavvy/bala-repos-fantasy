import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

const UPCOMING_MATCHS = { upcomingMatch: [
  { name : 'cricket',
  matchList: [
  {
    team1: 'assets/images/india-flag.png',
    team2: 'assets/images/australia-flag.png',
    teamName1: 'India',
    teamName2: 'Australia',
    type: 'T20 Series',
    remainingTime: '06h 38m 22s',
    count: 5,
    totalCount: 10
  },
  {
    team1: 'assets/images/india-flag.png',
    team2: 'assets/images/australia-flag.png',
    teamName1: 'India',
    teamName2: 'Australia',
    type: 'ODI Series',
    remainingTime: '06h 38m 22s',
    count: 5,
    totalCount: 8
  },
  {
    team1: 'assets/images/india-flag.png',
    team2: 'assets/images/australia-flag.png',
    teamName1: 'India',
    teamName2: 'Australia',
    type: 'Test Series',
    remainingTime: '06h 38m 22s',
    count: 2,
    totalCount: 10
  },
  {
    team1: 'assets/images/india-flag.png',
    team2: 'assets/images/australia-flag.png',
    teamName1: 'India',
    teamName2: 'Australia',
    type: 'T20 Series',
    remainingTime: '06h 38m 22s',
    count: 8,
    totalCount: 10
  },
  {
    team1: 'assets/images/india-flag.png',
    team2: 'assets/images/australia-flag.png',
    teamName1: 'India',
    teamName2: 'Australia',
    type: 'ODI Series',
    remainingTime: '06h 38m 22s',
    count: 6,
    totalCount: 10
  },
  ]
}
]}

@Component({
  selector: 'app-upcoming-series',
  templateUrl: './upcoming-series.component.html',
  styleUrls: ['./upcoming-series.component.css']
})
export class UpcomingSeriesComponent implements OnInit {
  upcomingMatches = UPCOMING_MATCHS;
   i=0;
   button= '';
   count;
   totalCount;
  constructor() {

   }

  ngOnInit() {
    var listLength = this.upcomingMatches.upcomingMatch[0].matchList.length;  
    for(var j=0; j<listLength; j++){
        this.count = this.upcomingMatches.upcomingMatch[0].matchList[j].count;
        this.totalCount = this.upcomingMatches.upcomingMatch[0].matchList[j].totalCount;
        var jcount = this.count;
        //console.log(jcount);
        var jtotalCount = this.totalCount;
        var remainCount = (jtotalCount - jcount) + 1;         
         if(this.i < this.totalCount) { 
           for(this.i; this.i < this.totalCount; this.i++){
             console.log(this.i);
            this.button += '<button class="btn"></button>';
            var buttonVal = this.button;   
            $( document ).ready(function() {
             $('.progressbar').html(buttonVal);
            
             $('.progressbar button').addClass('btn--bordered');
             $('.progressbar button:nth-child(-n+' + jcount +')').removeClass('btn--bordered');
             $('.progressbar button:nth-child(-n+' + jcount +')').addClass('btn--prime');
            });
           }
      
         }
       }
      }
}
