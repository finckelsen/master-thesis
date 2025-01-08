import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundChangerComponent } from './background-changer.component';

describe('BackgroundChangerComponent', () => {
  let component: BackgroundChangerComponent;
  let fixture: ComponentFixture<BackgroundChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundChangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
