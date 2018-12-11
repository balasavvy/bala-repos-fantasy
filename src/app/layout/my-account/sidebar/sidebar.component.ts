import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

const OPTIONS = [
    'Cricket', 'Fixtures', 'Live', 'Result', 'Football'
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  options = OPTIONS;
  option: string = 'Cricket';
  @Output() tabEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.option = 'My Contests';
    this.tabEvent.emit(this.option);
  }

  loadTab(opt) {
    this.option = opt;
    this.tabEvent.emit(this.option);
  }
}
