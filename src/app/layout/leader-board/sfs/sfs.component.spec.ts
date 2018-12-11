import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfsComponent } from './sfs.component';

describe('SfsComponent', () => {
  let component: SfsComponent;
  let fixture: ComponentFixture<SfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
