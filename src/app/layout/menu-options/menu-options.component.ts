import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

const OPTIONS = [
  'Cricket', 'Football'
]

const TABS = [
  {id: 1, title: 'upcoming'},
  {id: 2, title: 'live'}
]
const tournaments = [
 'tournament 1','tournament 2'
]
const tournamentsConfig = {
  placeholder: 'Tournaments'
}

const prize = [
  1000,
  500,
  100
]

const practiseEntryConfig = {
  placeholder: 'Practise entry'
}
const practiseEntryOptions = [
  'Free',
  'Rs.1-5',
  'Rs.6-10'
]


const tournamentOptions = [
  'Tournament 1', 'Tournament 2'
]

const prizeOptions = [
 1000, 500, 100
]

const tournamentConfig = {
  placeholder: 'Tournaments'
}

const prizeConfig = {
  placeholder: 'Prize',
  search:false
}


@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuOptionsComponent implements OnInit {
  tabs = TABS;
  tournaments = tournaments;
  tournamentsConfig = tournamentsConfig;
  prizeOptions = prizeOptions;
  prizeConfig = prizeConfig;
  practiseEntryConfig = practiseEntryConfig;
  practiseEntryOptions = practiseEntryOptions;
  options = OPTIONS;
  tournamentOptions = tournamentOptions;
  tournamentConfig = tournamentConfig;
  public daterange: any = {};

  public currentOption;
  public currentTab;
  public currenttournament;
  public currentPrize;
  public current_practise_entry;

  constructor() { }
  ngOnInit() {
    this.currentTab = 1;
    this.currentOption = 'Cricket';
  }

  public selectTab = (tab) => {
    if(this.currentTab === tab) return;    
    this.currentTab = tab;
  }

  public selectOption(option) {
    
    if($('.dropdown-content ').hasClass('show')) {
      $(".dropdown-content").removeClass("show");
    }
    if(this.currentOption === option) return;    
    this.currentOption = option;
  }

  openMenu(e: Event) {  
    e.stopPropagation(); 
   var target = e.currentTarget;
    $(target).parent().find('.dropdown-content').addClass('show');
  }

  onClickedOutside(e: Event) {
    // e.preventDefault();
    

    if($('.dropdown-content ').hasClass('show')) {
      $(".dropdown-content").removeClass("show");
    }

  }

  public dateOptions: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    opens: "left",
    
};

public selectedDate(value: any, datepicker?: any) {
    // this is the date the iser selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // or manupulat your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
}
  

}
