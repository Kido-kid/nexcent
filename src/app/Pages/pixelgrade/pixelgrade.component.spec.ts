import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelgradeComponent } from './pixelgrade.component';

describe('PixelgradeComponent', () => {
  let component: PixelgradeComponent;
  let fixture: ComponentFixture<PixelgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelgradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixelgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
