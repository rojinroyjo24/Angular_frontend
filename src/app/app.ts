import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Day1 } from './day1/day1';
import { Day2 } from './day2/day2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,Day1,Day2,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myanguproj');
}
