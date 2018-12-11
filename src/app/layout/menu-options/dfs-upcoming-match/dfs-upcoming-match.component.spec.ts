import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfsUpcomingMatchComponent } from './dfs-upcoming-match.component';

describe('DfsUpcomingMatchComponent', () => {
  let component: DfsUpcomingMatchComponent;
  let fixture: ComponentFixture<DfsUpcomingMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfsUpcomingMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfsUpcomingMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
