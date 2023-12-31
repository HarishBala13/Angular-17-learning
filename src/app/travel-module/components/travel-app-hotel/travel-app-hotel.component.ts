import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-travel-app-hotel',
  standalone: true,
  imports: [],
  templateUrl: './travel-app-hotel.component.html',
  styleUrl: './travel-app-hotel.component.css',
})
export class TravelAppHotelComponent {
  @ViewChild('spanAmount', { static: false })
  spanAmount!: ElementRef;

  _rooms: any;
  _roomsType:any;
  _persons: any;
  amounts: number[] = [700, 500, 300];
  finalAmount: number = 0;
  typeSpanElement: any = '';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const spanElement: HTMLSpanElement = this.spanAmount.nativeElement;
    this.typeSpanElement = spanElement;
    this.renderer.setProperty(
      this.typeSpanElement,
      'textContent',
      this.finalAmount
    );
  }

  selectRoomType(roomsType:any){
    this._roomsType = roomsType;
    this.calculateTicketFee();
  }
  selectRooms(rooms: any) {
    this._rooms = rooms;
    this.calculateTicketFee();
  }

  selectPersons(persons: any) {
    this._persons = persons;
    this.calculateTicketFee();
  }

  calculateTicketFee() {
    if (this._roomsType == 'Basic') {
      if (this._rooms == 1  || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[0] * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 2 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[0] * this._persons * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 3 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[0] * this._persons * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 4 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[0] * this._persons * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 5 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[0] * this._persons * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
    }

    else if (this._roomsType == 'Premium') {
      if (this._rooms == 1 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[1] * this._persons * this._persons;
        console.log(this.finalAmount);
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 2 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[1] * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 3 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[1] * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 4 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[1] * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
      if (this._rooms == 5 || this._persons == 2 || this._persons == 4 || this._persons == 1 || this._persons == 6 || this._persons == 8) {
        this.finalAmount = this._rooms * this.amounts[1] * this._persons * this._persons;
        this.renderer.setProperty(this.typeSpanElement, 'textContent', this.finalAmount);
      }
    }
  }
}
