import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfsLiveMatchComponent } from './dfs-live-match.component';

describe('DfsLiveMatchComponent', () => {
  let component: DfsLiveMatchComponent;
  let fixture: ComponentFixture<DfsLiveMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfsLiveMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfsLiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
