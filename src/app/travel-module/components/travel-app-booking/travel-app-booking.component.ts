import { Component } from '@angular/core';
import { TravelAppNavbarComponent } from '../travel-app-navbar/travel-app-navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-travel-app-booking',
  standalone: true,
  imports: [TravelAppNavbarComponent, RouterOutlet, RouterModule],
  templateUrl: './travel-app-booking.component.html',
  styleUrl: './travel-app-booking.component.css',
})
export class TravelAppBookingComponent {
  isHotelBooking: boolean = true;
}
