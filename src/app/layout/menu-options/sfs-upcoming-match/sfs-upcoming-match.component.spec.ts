import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfsUpcomingMatchComponent } from './sfs-upcoming-match.component';

describe('SfsUpcomingMatchComponent', () => {
  let component: SfsUpcomingMatchComponent;
  let fixture: ComponentFixture<SfsUpcomingMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfsUpcomingMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfsUpcomingMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
