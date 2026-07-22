import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiagonAlley } from './diagon-alley.service';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Harry-Potter-Library';
}
