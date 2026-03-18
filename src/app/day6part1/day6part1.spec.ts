import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6part1 } from './day6part1';

describe('Day6part1', () => {
  let component: Day6part1;
  let fixture: ComponentFixture<Day6part1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day6part1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6part1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
