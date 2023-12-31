import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelAppNavbarComponent } from './components/travel-app-navbar/travel-app-navbar.component';
import { TravelAppBookingComponent } from './components/travel-app-booking/travel-app-booking.component';
import { TravelAppBusComponent } from './components/travel-app-bus/travel-app-bus.component';
import { TravelAppCarComponent } from './components/travel-app-car/travel-app-car.component';
import { TravelAppFlightComponent } from './components/travel-app-flight/travel-app-flight.component';
import { TravelAppHotelComponent } from './components/travel-app-hotel/travel-app-hotel.component';

const routes: Routes = [
  {
    path:'',component:TravelAppNavbarComponent
  },
  {
    path:'ticket-booking',component:TravelAppBookingComponent,children:[
      {
        path:'book-bus',component:TravelAppBusComponent
      },
      {
        path:'book-car',component:TravelAppCarComponent
      },
      {
        path:'book-flight',component:TravelAppFlightComponent
      },
      {
        path:'book-hotel',component:TravelAppHotelComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelModuleRoutingModule { }
