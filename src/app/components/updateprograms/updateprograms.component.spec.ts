import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprogramsComponent } from './updateprograms.component';

describe('UpdateprogramsComponent', () => {
  let component: UpdateprogramsComponent;
  let fixture: ComponentFixture<UpdateprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprogramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
