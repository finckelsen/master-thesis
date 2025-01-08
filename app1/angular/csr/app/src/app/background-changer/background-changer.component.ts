import { Component } from '@angular/core';

@Component({
  selector: 'app-background-changer',
  templateUrl: './background-changer.component.html',
  styleUrls: ['./background-changer.component.css']
})
export class BackgroundChangerComponent {
  bgColor: string = 'white'; // Initial background color

  changeBackgroundColor(): void {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.bgColor = randomColor;

    // Change the body's background color
    document.body.style.backgroundColor = randomColor;
  }
}
