import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BorrowedBookService } from './borrowed-book.service';
import { Page } from './models/page-view';
import { BorrowedBook } from './models/borrowed-book';

export const borrowedBooksPageResolver: ResolveFn<Page<BorrowedBook>> = (route, state) => {
  const borrowedBooksService = inject(BorrowedBookService);

  return borrowedBooksService.getBorrowedBooksPage();
};
