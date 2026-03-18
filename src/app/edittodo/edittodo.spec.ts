import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edittodo } from './edittodo';

describe('Edittodo', () => {
  let component: Edittodo;
  let fixture: ComponentFixture<Edittodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edittodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edittodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
