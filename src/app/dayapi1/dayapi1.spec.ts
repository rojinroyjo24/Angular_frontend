import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dayapi1 } from './dayapi1';

describe('Dayapi1', () => {
  let component: Dayapi1;
  let fixture: ComponentFixture<Dayapi1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dayapi1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dayapi1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
