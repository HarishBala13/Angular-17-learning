import { Component, inject } from '@angular/core';
import { BooksComponent } from '../books.component';
import { BooksServiceService } from 'src/books-service.service';
import {
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-managebook',
  standalone: true,
  imports: [BooksComponent, RouterModule, RouterOutlet],
  templateUrl: './managebook.component.html',
  styleUrl: './managebook.component.css',
})
export class ManagebookComponent {
  booksService = inject(BooksServiceService);
  booksDetails: Array<any> = [];

  constructor(private router: Router) {
   this.booksService.getAllBooks().subscribe((arg: any) => {
      this.booksDetails = arg;
      console.log(this.booksDetails)
    });
  }
  navigateToManageBook(id: Number) {
    this.router.navigate(['/edit/'], { queryParams: { id: id } });
  }
}
