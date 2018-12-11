import { Component, OnInit } from '@angular/core';

const UPCOMING_SERIES = { series: [
  { name : 'cricket',
  seriesList: [
    { id: 1, image: 'assets/images/match-series.jpg', progress: 50, content: 'Rs. 15840 to be won 21 Sept 4:00 PM'},
    { id: 2, image: 'assets/images/match-series.jpg', progress: 70, content: 'Rs. 15840 to be won 21 Sept 4:00 PM'},
    { id: 3, image: 'assets/images/match-series.jpg', progress: 60, content: 'Rs. 15840 to be won 21 Sept 4:00 PM'},
    { id: 4, image: 'assets/images/match-series.jpg', progress: 77, content: 'Rs. 15840 to be won 21 Sept 4:00 PM'}
  ]
},
// { name : 'football',
//   seriesList: [
//     { id: 1, image: 'assets/images/match-series-2.jpg'},
//     { id: 2, image: 'assets/images/match-series-2.jpg'},
//     { id: 3, image: 'assets/images/match-series-2.jpg'},
//     { id: 4, image: 'assets/images/match-series-2.jpg'}
//   ]
// },
]}

@Component({
  selector: 'app-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.css']
})
export class UpcomingMatchComponent implements OnInit {
  upcomingSeries = UPCOMING_SERIES;

  constructor() { }

  ngOnInit() {
  }

}
