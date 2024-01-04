import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  constructor(private _http: HttpClient) {}

  getAllBooks() {
    return this._http.get('http://localhost:3000/booksDetails');
  }

  addBooks(bookDetails: object) {
    this._http
      .post('http://localhost:3000/booksDetails', bookDetails)
      .subscribe();
  }

  updateBooks(bookId: Number, book_title: any, book_description: any) {
    this._http.patch('http://localhost:3000/booksDetails/'+bookId, {
      book_title: book_title,
      book_description: book_description,
    }).subscribe();
  }
}
