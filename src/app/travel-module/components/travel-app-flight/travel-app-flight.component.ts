import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-travel-app-flight',
  standalone: true,
  imports: [],
  templateUrl: './travel-app-flight.component.html',
  styleUrl: './travel-app-flight.component.css'
})
export class TravelAppFlightComponent {
    @ViewChild('spanAmount', { static: false })
    spanAmount!: ElementRef;

    _flightType: any;
    _seats: any;
    _seatsType: any;
    amounts: number[] = [15000, 6000, 10000];
    finalAmount: number = 0;
    typeSpanElement: any = '';

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit() {
      const spanElement: HTMLSpanElement = this.spanAmount.nativeElement;
      this.typeSpanElement = spanElement;
      this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
    }

    selectFlightType(flightType: any) {
      this._flightType = flightType;
      this.calculateTicketFee();
    }

    selectSeats(seats: any) {
      this._seats = seats;
      this.calculateTicketFee();
    }

    calculateTicketFee() {
      if (this._flightType == 'Business') {
        if (this._seats == 1) {
          this.finalAmount = this._seats * this.amounts[0];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 2) {
          this.finalAmount = this._seats * this.amounts[0];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 3) {
          this.finalAmount = this._seats * this.amounts[0];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 4) {
          this.finalAmount = this._seats * this.amounts[0];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 5) {
          this.finalAmount = this._seats * this.amounts[0];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
      }

      else if (this._flightType == 'Economic') {
        if (this._seats == 1) {
          this.finalAmount = this._seats * this.amounts[1];
          console.log(this.finalAmount);
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 2) {
          this.finalAmount = this._seats * this.amounts[1];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 3) {
          this.finalAmount = this._seats * this.amounts[1];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 4) {
          this.finalAmount = this._seats * this.amounts[1];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 5) {
          this.finalAmount = this._seats * this.amounts[1];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
      }

      else if (this._flightType == 'Elite') {
        if (this._seats == 1) {
          this.finalAmount = this._seats * this.amounts[2];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 2) {
          this.finalAmount = this._seats * this.amounts[2];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 3) {
          this.finalAmount = this._seats * this.amounts[2];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 4) {
          this.finalAmount = this._seats * this.amounts[2];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
        if (this._seats == 5) {
          this.finalAmount = this._seats * this.amounts[2];
          this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
        }
      }
    }
}
