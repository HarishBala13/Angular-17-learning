import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksServiceService } from 'src/books-service.service';
import { BooksComponent } from '../books.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [BooksComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './editbook.component.html',
  styleUrl: './editbook.component.css',
})
export class EditbookComponent {
  bookId: any;
  booksService = inject(BooksServiceService);
  subscribedValues: any = '';
  currentBook:any='';

  constructor(private route: ActivatedRoute, private formBuilder:FormBuilder) {
    route.paramMap.subscribe((params: Params) => {
      this.bookId = params['get']('id');
    });

    this.booksService.getAllBooks().subscribe((data: any) => {
      data.map((_data: any) => {
        if (_data['id'] == this.bookId) {
          this.currentBook = _data;
        }
      });
    });
  }

  bookDetails = this.formBuilder.group({
    'book-title': ['', Validators.required],
    'book-description': ['', Validators.required],
  });

  submitDetails() {
    this.booksService.updateBooks(this.bookId, this.bookDetails.value['book-title'], this.bookDetails.value['book-description']);
    this.bookDetails.reset();
  }

}
