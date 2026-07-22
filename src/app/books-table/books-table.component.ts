import { Component, Inject, inject } from '@angular/core';
import { DiagonAlley } from '../diagon-alley.service';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LanguageSelectionComponent } from '../language-selection/language-selection.component';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-table',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.css'
})
export class BooksTableComponent {
  constructor(){
    
  }
  protected diagonAlley = inject(DiagonAlley);
  private dialog = inject(MatDialog)

  
  selectLanguage(){
    const dialogRef = this.dialog.open(LanguageSelectionComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.diagonAlley.selectedLanguage.set(result);
      this.diagonAlley.getAllBooks();
    });
  }
}