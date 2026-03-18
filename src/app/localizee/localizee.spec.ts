import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Localizee } from './localizee';

describe('Localizee', () => {
  let component: Localizee;
  let fixture: ComponentFixture<Localizee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Localizee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Localizee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
