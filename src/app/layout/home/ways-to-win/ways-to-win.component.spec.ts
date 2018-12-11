import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToWinComponent } from './ways-to-win.component';

describe('WaysToWinComponent', () => {
  let component: WaysToWinComponent;
  let fixture: ComponentFixture<WaysToWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaysToWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaysToWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
