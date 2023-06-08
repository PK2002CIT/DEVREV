import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookCollectionService {

  lendBooksArray: any[] = [];
  addBooks(books: any[]) {
    this.lendBooksArray.push(books);
}
  constructor() {}
}
