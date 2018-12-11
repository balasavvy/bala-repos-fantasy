import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardPlayGameComponent } from './leaderboard-play-game.component';

describe('LeaderboardPlayGameComponent', () => {
  let component: LeaderboardPlayGameComponent;
  let fixture: ComponentFixture<LeaderboardPlayGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardPlayGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardPlayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
