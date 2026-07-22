import { HttpClient } from '@angular/common/http';
import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import { Book } from './models/book.model';
import { Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagonAlley {
  
  readonly apiBaseURL = signal("https://potterapi-fedeperin.vercel.app");
  constructor(private http: HttpClient, private router: Router) { }

  readonly availableLanguages = signal(["en", "es", "fr", "it", "pt"])
  selectedLanguage = signal("");
  currentUrl = computed(() => this.apiBaseURL() + "/" + this.selectedLanguage() +"/books");
  books = signal<Book[]>([]);
  readonly booksInCart = signal<Book[]>([]);
  wandBookmarkPrice = signal(10);
  hardcoverPrice = signal(5);
  recalculateTotal = signal(0);

  total = computed(()=> {
    let total = 0;
    for(let book of this.booksInCart()){
      if (book && book.price) {
        total += book.price * book.quantity;
        total = book.wandBookmark ? total + this.wandBookmarkPrice() * book.quantity : total;
        total = book.hardCover ? total + this.hardcoverPrice() * book.quantity : total;
      }
    }
    return total;
  })

  selectedBook = signal<Book | undefined>(undefined);
  
    getAllBooks(){
      this.http.get<Book[]>(this.currentUrl()).pipe(tap(books=>{
        this.books.set(books)
        this.books().map(book => book.price = book.pages * 0.3)
      })).subscribe();
    }

    setSelectedBook(index: number){
        const book: Book | undefined = this.books().find(b => b.index === index);
        this.selectedBook.set(book);
    }

    wandBookmarkSelected(book: Book){
      const books = this.booksInCart();
      books.map(b => {
        b.wandBookmark = b.title === book.title ? !b.wandBookmark : b.wandBookmark;
      })
      this.booksInCart.set(books);
      this.recalculateTotal.set(this.recalculateTotal() > 2 ? 1 : this.recalculateTotal() + 1);
    }

    hardcoverSelected(book: Book){
      let books = this.booksInCart();
      books.map(b => 
        b.hardCover = b.title === book.title ? !b.hardCover : b.hardCover
      );
      this.booksInCart.set(books);
      this.recalculateTotal.set(this.recalculateTotal() > 2 ? 1 : this.recalculateTotal() + 1);
    }

    addBookToCart(book: Book) {
       const bookCartIndex = this.booksInCart().findIndex(b => b.title === book.title);
       if (bookCartIndex != -1) {
        const booksInCart = this.booksInCart();
        const quantity = booksInCart[bookCartIndex].quantity;
        booksInCart[bookCartIndex].quantity = quantity + 1;
        this.booksInCart.set(booksInCart);
       } else {
        book.quantity = 1;
        this.booksInCart.set([...this.booksInCart(), book])
       }
       this.recalculateTotal.set(this.recalculateTotal() > 2 ? 1 : this.recalculateTotal() + 1);
    }
}
