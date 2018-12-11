import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  visible = true;
  visibleTabs = false;
  option;

  constructor() { }

  ngOnInit() {
  }
  showNav() {
    if(window.innerWidth < 767) {
      this.visible = !this.visible;
    }
  }

  closeNav() {
    if(window.innerWidth < 767) {    
      this.visible = false;
    }
  }
  showTabs(opt) {
    this.visibleTabs = true;
    this.option = opt;
  }
}
