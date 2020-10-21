import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpholsterySalesComponent } from './upholstery-sales.component';

describe('UpholsterySalesComponent', () => {
  let component: UpholsterySalesComponent;
  let fixture: ComponentFixture<UpholsterySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpholsterySalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpholsterySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
