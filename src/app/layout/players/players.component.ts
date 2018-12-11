import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playerVisible;
  @Input() childMessage: string;

  constructor(private _host: ElementRef) { }

  ngOnInit() {
  }

   addPlayer(){
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
