import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAppBookingComponent } from './travel-app-booking.component';

describe('TravelAppBookingComponent', () => {
  let component: TravelAppBookingComponent;
  let fixture: ComponentFixture<TravelAppBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelAppBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelAppBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
