import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service'; // Import CommonModule for *ngFor and other directives
import { CounterComponent } from '../counter/counter.component';
import { BackgroundAnimationComponent } from '../background-animation/background-animation.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, CounterComponent, BackgroundAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{

  data = inject(DataService).value;

}
