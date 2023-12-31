import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-travel-app-bus',
  standalone: true,
  imports: [],
  templateUrl: './travel-app-bus.component.html',
  styleUrl: './travel-app-bus.component.css',
})
export class TravelAppBusComponent {
  @ViewChild('spanAmount', { static: false })
  spanAmount!: ElementRef;

  _busType: any;
  _seats: any;
  _seatsType: any;
  amounts: number[] = [700, 500, 300];
  finalAmount: number = 0;
  typeSpanElement: any = '';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const spanElement: HTMLSpanElement = this.spanAmount.nativeElement;
    this.typeSpanElement = spanElement;
    this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
  }

  selectBusType(busType: any) {
    this._busType = busType;
    this.calculateTicketFee();
  }

  selectSeats(seats: any) {
    this._seats = seats;
    this.calculateTicketFee();
  }

  selectSeatType(seatsType: any) {
    this._seatsType = seatsType;
    this.calculateTicketFee();
  }

  calculateTicketFee() {
    if (this._busType == 'AC') {
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

    else if (this._busType == 'NON/AC') {
      // console.log(this.amounts[1]);
      // console.log(this.amounts[2]);

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

    else if (this._busType == 'Sleeper') {
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
