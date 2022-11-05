import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprogramComponent } from './newprogram.component';

describe('NewprogramComponent', () => {
  let component: NewprogramComponent;
  let fixture: ComponentFixture<NewprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
