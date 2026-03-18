import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8view } from './day8view';

describe('Day8view', () => {
  let component: Day8view;
  let fixture: ComponentFixture<Day8view>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day8view]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day8view);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
