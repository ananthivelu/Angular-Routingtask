import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camp1Component } from './camp1.component';

describe('Camp1Component', () => {
  let component: Camp1Component;
  let fixture: ComponentFixture<Camp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Camp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Camp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
