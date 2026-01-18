import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wwd } from './wwd';

describe('Wwd', () => {
  let component: Wwd;
  let fixture: ComponentFixture<Wwd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wwd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wwd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
