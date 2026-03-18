import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6part2 } from './day6part2';

describe('Day6part2', () => {
  let component: Day6part2;
  let fixture: ComponentFixture<Day6part2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day6part2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6part2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
