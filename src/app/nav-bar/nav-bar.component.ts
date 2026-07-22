import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiagonAlley } from '../diagon-alley.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  protected diagonAlley = inject(DiagonAlley);
}
