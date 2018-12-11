import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-team-players',
  templateUrl: './create-team-players.component.html',
  styleUrls: ['./create-team-players.component.css']
})
export class CreateTeamPlayersComponent implements OnInit {
  playerVisible;
  @Input() childMessage: string;
  constructor() { }

  ngOnInit() {
  }
  addPlayer() {
    // var target = event.currentTarget;
    // $(target).parent().find('.player-status').addClass('visible');
    // $(target).parent().parent().find('.icon-plus').addClass('invisible');
    $('.player-status').addClass('visible')
    
  }
  deletePlayer(e) {
    // var target = event.currentTarget;
    // $(target).parent().removeClass('visible');
    // $(target).parent().parent().find('.icon-plus').removeClass('invisible');
    $('.player-status').removeClass('visible')

  }
}
