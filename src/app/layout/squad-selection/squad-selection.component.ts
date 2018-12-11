import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayersComponent } from '../players/players.component';


const LIST = [
  {
    id: 1,
    role: 'batsman',
    icon: 'assets/images/bat.png',
    name: 'Brendon Mccullum',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 2,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 6,
    points: 110
  },
  {
    id: 3,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'Jack',
    photo: 'assets/images/user.png',
    bat: 5,
    points: 110
  },
  {
    id: 4,
    role: 'batsman',
    icon: 'assets/images/bat.png',
    name: 'Jill',
    photo: 'assets/images/user.png',
    bat: 8,
    points: 110
  },
  {
    id: 5,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'John',
    photo: 'assets/images/user.png',
    bat: 7,
    points: 110
  },
  {
    id:6,
    role: 'batsman',
    icon: 'assets/images/bat.png',
    name: 'Brendon Mccullum',
    photo: 'assets/images/user.png',
    bat: 2,
    points: 110
  },
  {
    id: 7,
    role: 'ar',
    icon: 'assets/images/ar.png',
    name: 'linda',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 8,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'dino',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 9,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'Micky',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 10
  },
  {
    id: 10,
    role: 'ar',
    icon: 'assets/images/ar.png',
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 11,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'bella',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 12,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'enna',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 13,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'angela',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 14,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 14
  },
  {
    id: 15,
    role: 'batsman',
    icon: 'assets/images/bat.png',
    name: 'Brendon Mccullum',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 16,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 6,
    points: 110
  },
  {
    id: 17,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'Jack',
    photo: 'assets/images/user.png',
    bat: 5,
    points: 110
  },
  {
    id: 18,
    role: 'batsman',
    icon: 'assets/images/bat.png',
    name: 'Jill',
    photo: 'assets/images/user.png',
    bat: 8,
    points: 110
  },
  {
    id: 19,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'John',
    photo: 'assets/images/user.png',
    bat: 7,
    points: 110
  },
  {
    id: 20,
    role: 'batsman',
    icon: 'assets/images/bat.png',
    name: 'Brendon Mccullum',
    photo: 'assets/images/user.png',
    bat: 2,
    points: 110
  },
  {
    id: 21,
    role: 'ar',
    icon: 'assets/images/ar.png',
    name: 'linda',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 22,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'dino',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 23,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'Micky',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 10
  },
  {
    id: 24,
    role: 'ar',
    icon: 'assets/images/ar.png',
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 25,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'bella',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 26,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'enna',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 27,
    role: 'wc',
    icon: 'assets/images/wk.png',
    name: 'angela',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 110
  },
  {
    id: 28,
    role: 'bowler',
    icon: 'assets/images/ball.png',
    name: 'Mark',
    photo: 'assets/images/user.png',
    bat: 3,
    points: 14
  }

]

const dropdownOptions1 = [
  'India', 'Australia', 'Newzealand'
]

const dropdownOptions2 = [
  'Fantasy point','Credit', 'Player name','Role'
]

const config1 = {
  placeholder: 'Team'
}

const config2 = {
  placeholder: 'Sort',
  search:false
}

@Component({
  selector: 'app-squad-selection',
  templateUrl: './squad-selection.component.html',
  styleUrls: ['./squad-selection.component.css'],
  
})
export class SquadSelectionComponent implements OnInit {

  lists = LIST;
  dropdownOptions1 = dropdownOptions1;
  dropdownOptions2 = dropdownOptions2;
  config1 = config1;
  config2= config2;
  isActiveId;
  activeRole;
  allRole = [];
  option = 0;

  @ViewChild('players')
  private players: PlayersComponent;

  constructor() { }

  ngOnInit() {
    // for(var i=0;i<this.lists.length; i++) {
    //   var x = '';
    //   this.allRole[i]= this.lists[i]['role'];
    // }
    
    this.option = 0;
    
    this.activeRole = 'wc';
  }

  // Row Selection
  selectRow(i) {        
   this.isActiveId = i;
  }

  addPlayer(id) {
    this.isActiveId = id;
    
  }

  showRole(el) {
    this.activeRole = el;
  }

  selectNav($event) {
    
    this.option = $event; 
  }
}