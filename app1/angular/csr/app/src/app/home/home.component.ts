import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and other directives
import { CounterComponent } from '../counter/counter.component';
import { BackgroundAnimationComponent } from '../background-animation/background-animation.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, CounterComponent, BackgroundAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  data: any = null; // Variable to hold fetched data

  ngOnInit(): void {
    this.fetchData(); // Call the fetchData method when the component is initialized
  }

  // Method to fetch data, similar to Vue's created hook
  async fetchData() {
    try {
      const response = await fetch('https://api.sampleapis.com/codingresources/codingResources'); // Replace with the actual API URL
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      this.data = await response.json(); // Parse and set the data
    } catch (error) {
      console.error('Error fetching data:', error); // Handle errors
    }
  }
}
