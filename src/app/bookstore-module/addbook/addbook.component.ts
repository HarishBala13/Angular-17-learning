import { Component, inject } from '@angular/core';
import { BooksComponent } from '../books.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksServiceService } from 'src/books-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [BooksComponent, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css',
  styles: [
    `
      input.ng-invalid {
        border: 2px solid red;
      }
      input.ng-valid {
        border: 2px solid green;
      }
      input.ng-untouched {
        border: 1px solid black;
      }
    `,
  ],
})
export class AddbookComponent {
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder
  ) {}
  bookDetails = this.formBuilder.group({
    'book-title': ['', Validators.required],
    'book-description': ['', Validators.required],
  });

  booksService = inject(BooksServiceService)
  submitDetails() {
    this.booksService.addBooks(this.bookDetails.value);
    this.bookDetails.reset();
  }
}
