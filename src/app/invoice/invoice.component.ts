import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DiagonAlley } from '../diagon-alley.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  protected diagonAlley = inject(DiagonAlley);
}
