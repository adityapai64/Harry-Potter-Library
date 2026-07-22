import { Component, inject } from '@angular/core';
import { DiagonAlley } from '../diagon-alley.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent {
  protected diagonAlley = inject(DiagonAlley);
}
