import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  defaultActiveNav;
  public visible = false;
  @Output() tabEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
   this.defaultActiveNav = 0;
    this.tabEvent.emit(this.defaultActiveNav);

  }

   // Nav Selection
   selectNav(i) {
    this.defaultActiveNav = i;
    this.tabEvent.emit(this.defaultActiveNav);
  }

  openSearchbar() {
    this.visible = !this.visible;
  }

}
