import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaidinhComponent } from './haidinh.component';

describe('HaidinhComponent', () => {
  let component: HaidinhComponent;
  let fixture: ComponentFixture<HaidinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaidinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaidinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
