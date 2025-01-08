import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundChangerComponent } from '../background-changer/background-changer.component';

@Component({
  selector: 'app-image',
  imports: [CommonModule, BackgroundChangerComponent],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageData: { id: number; url: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    const imageIds = Array.from({ length: 10 }, (_, index) => index + 1);
    this.imageData = imageIds.map((id) => ({
      id,
      url: `https://picsum.photos/id/${id}/200/300`
    }));
  }
  
}
