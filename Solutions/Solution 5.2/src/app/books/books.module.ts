import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [BookListComponent,BookFormComponent],
  exports: [BookListComponent]
})
export class BooksModule { }
