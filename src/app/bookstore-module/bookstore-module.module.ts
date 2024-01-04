import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookstoreModuleRoutingModule } from './bookstore-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksServiceService } from 'src/books-service.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookstoreModuleRoutingModule,
    HttpClientModule
  ],
  providers:[BooksServiceService]
})
export class BookstoreModuleModule { }
