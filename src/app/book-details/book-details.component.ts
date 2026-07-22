import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagonAlley } from '../diagon-alley.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  bookIndex!: number;
  lang!:string;
  currentBook!: Book | undefined;

  constructor(private activatedRoute: ActivatedRoute, protected diagonAlley: DiagonAlley){}

}
