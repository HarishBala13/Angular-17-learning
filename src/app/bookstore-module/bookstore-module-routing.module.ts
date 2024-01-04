import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  {
    path:'',component:BooksComponent
  },
  {
    path:'',
    children:[
      {
        path:'books',component:BooksComponent
      },
      {
        path:'add-book',component:AddbookComponent
      },
      {
        path:'manage-books',component:ManagebookComponent
      }
    ]
  },
  {
    path:'manage-books',
    children:[
      {
        path:'edit/:id',component:EditbookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookstoreModuleRoutingModule { }
