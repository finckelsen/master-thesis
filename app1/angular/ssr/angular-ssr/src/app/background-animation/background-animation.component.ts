import { Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.css'],
})
export class BackgroundAnimationComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  private shapes: Shape[] = [];
  private animationFrameId!: number;
  private X!: number;
  private Y!: number;
  private shapeNum: number = 300;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return; // Skip initialization if not running in the browser

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();

    for (let i = 0; i < this.shapeNum; i++) {
      this.shapes.push(
        new Shape(this.ctx!, this.X * (Math.random() + Math.random()) / 2, this.rand(0, this.Y))
      );
    }

    this.render();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!this.isBrowser) return;
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.X = canvas.width = window.innerWidth;
    this.Y = canvas.height = window.innerHeight;
  }

  private render = (): void => {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.X, this.Y);
    this.shapes.forEach((shape) => shape.render());
    this.animationFrameId = requestAnimationFrame(this.render);
  };

  private rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

class Shape {
  private x!: number;
  private y!: number;
  private r!: number;
  private ga!: number;
  private v!: { x: number; y: number };
  private l!: number;
  private sl!: number;

  constructor(private ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.init(x, y);
  }

  private rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private init(x: number, y: number): void {
    this.x = x;
    this.y = y;
    this.r = this.rand(10, 25);
    this.ga = Math.random() ** 4;
    this.v = { x: Math.random(), y: -1 };
    this.l = this.rand(0, 20);
    this.sl = this.l;
  }

  private updateParams(): void {
    this.l -= 1;
    if (this.l < 0) {
      this.init(window.innerWidth * (Math.random() + Math.random()) / 2, this.rand(0, window.innerHeight));
    }
  }

  private updatePosition(): void {
    this.x += Math.random();
    this.y -= Math.random();
  }

  private draw(): void {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = this.ga;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();
  }

  render(): void {
    this.updatePosition();
    this.updateParams();
    this.draw();
  }
}
