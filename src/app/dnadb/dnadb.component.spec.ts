import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnadbComponent } from './dnadb.component';

describe('DnadbComponent', () => {
  let component: DnadbComponent;
  let fixture: ComponentFixture<DnadbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnadbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnadbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
