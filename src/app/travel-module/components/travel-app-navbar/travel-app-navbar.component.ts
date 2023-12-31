import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-travel-app-navbar',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './travel-app-navbar.component.html',
  styleUrl: './travel-app-navbar.component.css'
})
export class TravelAppNavbarComponent {

}
