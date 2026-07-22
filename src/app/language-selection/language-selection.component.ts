import { Component, Inject, inject } from '@angular/core';
import { DiagonAlley } from '../diagon-alley.service';
import { LanguageAcronymPipe } from '../language-acronym.pipe';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [LanguageAcronymPipe, MatDialogModule],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.css'
})
export class LanguageSelectionComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}){}
  protected diagonAlley = inject(DiagonAlley)
}
