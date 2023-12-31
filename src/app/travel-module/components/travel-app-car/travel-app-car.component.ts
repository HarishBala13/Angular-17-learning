import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-travel-app-car',
  standalone: true,
  imports: [],
  templateUrl: './travel-app-car.component.html',
  styleUrl: './travel-app-car.component.css'
})
export class TravelAppCarComponent {

  @ViewChild('spanAmount', { static: false })
  spanAmount!: ElementRef;

  _carType: any;
  _seats: any;
  _hours: any;
  amounts: number[] = [300, 200, 100];
  finalAmount: number = 0;
  typeSpanElement: any = '';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const spanElement: HTMLSpanElement = this.spanAmount.nativeElement;
    this.typeSpanElement = spanElement;
    this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
  }

  selectCarType(carType: any) {
    this._carType = carType;
    this.calculateTicketFee();
  }

  selectSeats(seats: any) {
    this._seats = seats;
    this.calculateTicketFee();
  }

  selectHours(hours: any) {
    this._hours = hours;
    this.calculateTicketFee();
  }

  calculateTicketFee() {
    if (this._carType == 'Sedan') {
      if (this._seats == 1  || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[0] * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 2 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[0] * this._hours * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 3 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[0] * this._hours * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 4 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[0] * this._hours * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 5 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[0] * this._hours * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
    }

    else if (this._carType == 'Family') {
      if (this._seats == 1 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[1] * this._hours * this._hours;
        console.log(this.finalAmount);
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 2 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[1] * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 3 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[1] * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 4 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[1] * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 5 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[1] * this._hours * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
    }

    else if (this._carType == 'SUV') {
      if (this._seats == 1 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[2] * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 2 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[2] * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 3 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[2] * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 4 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[2] * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._seats == 5 || this._hours == 2 || this._hours == 4 || this._hours == 1) {
        this.finalAmount = this._seats * this.amounts[2] * this._hours;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
    }
  }

}
