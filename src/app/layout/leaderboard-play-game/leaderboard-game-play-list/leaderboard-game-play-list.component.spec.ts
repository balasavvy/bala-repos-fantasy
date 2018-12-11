import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardGamePlayListComponent } from './leaderboard-game-play-list.component';

describe('LeaderboardGamePlayListComponent', () => {
  let component: LeaderboardGamePlayListComponent;
  let fixture: ComponentFixture<LeaderboardGamePlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardGamePlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardGamePlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
