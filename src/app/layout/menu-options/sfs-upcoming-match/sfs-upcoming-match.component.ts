import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
const SFS_GAMES = {upcomingMatch: [
  { name : 'cricket',
  matchList: [
  {
    team1: 'Australia',
    team2: 'India',
    image_team1: 'assets/images/australia-flag.png',
    image_team2: 'assets/images/india-flag.png',
    price: 'Rs. 13345 to be won',
    date: '20 Sept, 4:00 PM',
    type: 'T20',
    remainingTime: '06h 38m 22s',    
    count: 5,
    totalCount: 10
  },
  {
    team1: 'Australia',
    team2: 'India',
    image_team1: 'assets/images/australia-flag.png',
    image_team2: 'assets/images/india-flag.png',
    price: 'Rs. 15840 to be won',
    date: '21 Sept, 4:00 PM',
    type: 'T20',
    remainingTime: '06h 38m 22s',  
    count: 5,
    totalCount: 10  
  },
  {
    team1: 'Australia',
    team2: 'India',
    image_team1: 'assets/images/australia-flag.png',
    image_team2: 'assets/images/india-flag.png',
    price: 'Rs. 15840 to be won',
    date: '21 Sept 4:00 PM',
    type: 'T20',
    remainingTime: '06h 38m 22s',
    count: 5,
    totalCount: 10
  },
]
}
]}


@Component({
  selector: 'app-sfs-upcoming-match',
  templateUrl: './sfs-upcoming-match.component.html',
  styleUrls: ['./sfs-upcoming-match.component.css']
})
export class SfsUpcomingMatchComponent implements OnInit {
  sfs_games = SFS_GAMES;
  i=0;
  button= '';
  count;
  totalCount;
  constructor() { }

  ngOnInit() {
    var listLength = this.sfs_games.upcomingMatch[0].matchList.length;  
    for(var j=0; j<listLength; j++){
        this.count = this.sfs_games.upcomingMatch[0].matchList[j].count;
        this.totalCount = this.sfs_games.upcomingMatch[0].matchList[j].totalCount;
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
