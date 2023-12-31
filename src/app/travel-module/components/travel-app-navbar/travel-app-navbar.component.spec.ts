import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAppNavbarComponent } from './travel-app-navbar.component';

describe('TravelAppNavbarComponent', () => {
  let component: TravelAppNavbarComponent;
  let fixture: ComponentFixture<TravelAppNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelAppNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelAppNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
