import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookCollectionService } from '../book-collection.service';
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {
  lendBooksArray!:any[];

  constructor(private route:ActivatedRoute,private router:Router,private bookCollection:BookCollectionService){}

  ngOnInit(){
       this.lendBooksArray = this.bookCollection.lendBooksArray
  }

  returnBook(book:any){
    const index = this.lendBooksArray.indexOf(book);
    if(index !==-1){
      this.lendBooksArray.splice(index,1);
    }

  }
}
