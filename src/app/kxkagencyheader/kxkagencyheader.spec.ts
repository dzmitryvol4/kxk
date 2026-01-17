import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kxkagencyheader } from './kxkagencyheader';

describe('Kxkagencyheader', () => {
  let component: Kxkagencyheader;
  let fixture: ComponentFixture<Kxkagencyheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kxkagencyheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kxkagencyheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
